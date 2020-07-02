import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Article from '../Components/Article/Article';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import { Link } from 'react-router-dom';
import styles from './CourseMessagePage.module.css';
import api from '../Code/api';

function CourseArticlePage() {
    let { articleId } = useParams();
    const [post, setPost] = useState(null);
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    const loadPost = () => {
        api.get(`/posts/${articleId}?_expand=course&_embed=comments`, setPost);
    }

    useEffect(loadPost, [articleId]);

    useEffect(loadUsers, []);

    if (post && users.length) {
        return (
            <CoursePageLayout title={post.course.name} courseId={post.course.id}>
                <Link to={`/courses/${post.course.id}/articles`} title="Tillbaka">
                    <img className={styles.backIcon} src="/icons/back.png" alt="Back" width="24" height="24"></img>
                </Link>
                <div className={styles.message}>
                    <Article
                        post={post}
                        users={users}
                        deleteHandler={() => { }}

                    >
                    </Article>
                </div>
            </CoursePageLayout>
        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseArticlePage;
