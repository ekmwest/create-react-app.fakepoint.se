import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Components/Message/Message';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import ThreadMessage from '../Components/Thread/ThreadMessage';
import AddThreadMessage from '../Components/Thread/AddThreadMessage';
import { Link } from 'react-router-dom';
import styles from './CourseMessagePage.module.css';
import api from '../Code/api';

function CourseMessagePage() {
    let { postId } = useParams();
    const [post, setPost] = useState(null);
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    const loadPost = () => {
        api.get(`/posts/${postId}?_expand=course&_embed=comments`, setPost);
    }

    const saveComment = (comment) => {
        api.post('/comments', { content: comment.content, user_id: 7, post_id: comment.postId }, loadPost);
    }

    useEffect(loadPost, [postId]);

    useEffect(loadUsers, []);

    if (post && users.length) {
        return (
            <CoursePageLayout title={post.course.name} courseId={post.course.id}>
                <Link to={`/courses/${post.course.id}/posts`} title="Tillbaka">
                    <img className={styles.backIcon} src="/icons/back.png" alt="Back" width="24" height="24"></img>
                </Link>
                <div className={styles.message}>
                    <Message
                        post={post}
                        users={users}
                        deleteHandler={() => { }}

                    >
                    </Message>
                </div>
                <div className={styles.comments}>
                    {post.comments.map(comment => (<ThreadMessage key={comment.id} comment={comment} users={users} />))}
                    <AddThreadMessage postId={post.id} users={users} saveComment={saveComment} ></AddThreadMessage>
                </div>
            </CoursePageLayout>
        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseMessagePage;
