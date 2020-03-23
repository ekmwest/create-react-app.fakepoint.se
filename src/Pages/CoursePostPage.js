import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Components/Post/Post';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import api from '../Code/api';

function CoursePostPage() {
    let { postId } = useParams();
    const [post, setPost] = useState(null);
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    useEffect(() => {
        api.get(`/posts/${postId}?_expand=course&_embed=comments`, setPost);
    }, [postId]);

    useEffect(loadUsers, []);

    if (post && users.length) {
        return (
            <CoursePageLayout title={post.course.name} courseId={post.course.id}>
                <p><strong><em><center>NOTE: Comments don't work on post details page.</center></em></strong></p>
                <Post
                    post={post}
                    users={users}
                    deleteHandler={() => { }}
                    saveCommentHandler={() => { }}
                >
                </Post>
            </CoursePageLayout>
        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CoursePostPage;
