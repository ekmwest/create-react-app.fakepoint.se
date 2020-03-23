import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Message from '../Components/Message/Message';
import CoursePageLayout from '../Layouts/CoursePageLayout';
import Comment from '../Components/Comment/Comment';
import AddComment from '../Components/Comment/AddComment';
import { Link } from 'react-router-dom';
import api from '../Code/api';

function CourseMessagePage() {
    let { messageId } = useParams();
    const [post, setPost] = useState(null);
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    const loadPost = () => {
        api.get(`/posts/${messageId}?_expand=course&_embed=comments`, setPost);
    }

    const saveComment = (comment) => {
        api.post('/comments', { content: comment.content, user_id: 7, post_id: comment.postId }, loadPost);
    }

    useEffect(loadPost, [messageId]);

    useEffect(loadUsers, []);

    if (post && users.length) {
        return (
            <CoursePageLayout title={post.course.name} courseId={post.course.id}>
                <Link to={`/courses/${post.course.id}/messages`}>
                    <img src="/icons/back_617160.png" alt="Back" width="40" height="40"></img>
                </Link>
                <Message
                    post={post}
                    users={users}
                    deleteHandler={() => { }}
                >
                </Message>
                <div>
                    {post.comments.map(comment => (<Comment key={comment.id} comment={comment} users={users} />))}
                    <AddComment postId={post.id} users={users} saveComment={saveComment} ></AddComment>
                </div>
            </CoursePageLayout>
        );
    } else {
        return (<CoursePageLayout></CoursePageLayout>);
    }
}

export default CourseMessagePage;
