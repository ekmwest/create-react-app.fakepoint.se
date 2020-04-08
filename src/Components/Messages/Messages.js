import React, { useState, useEffect } from 'react';
import Message from '../Message/Message';
import styles from './Messages.module.css';
import AddMessage from '../Message/AddMessage';
import api from '../../Code/api';

function Messages({ courseId }) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);



    const loadPosts = () => {
        if (courseId) {
            api.get(`/posts?_expand=course&_embed=comments&course_id=${courseId}&_sort=created_at&_order=asc`, setPosts);
        } else {
            api.get(`/posts?_expand=course&_embed=comments&_sort=created_at&_order=asc`, setPosts);
        }

    }

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    useEffect(loadUsers, []);

    useEffect(loadPosts, [courseId]);

    const savePost = post => {
        api.post('/posts', { content: post.content, course_id: parseInt(courseId), user_id: 4 }, loadPosts);
    }

    const deletePost = postId => {
        api.delete(`/posts/${postId}`, loadPosts);
    }

    if (users.length && posts.length) {
            return (
                <div className={styles.messages_container}>
                    <div className={styles.messages}>
                        {posts.splice(0,posts.length-3).map(post => (
                            <Message
                                key={post.id}
                                post={post}
                                users={users}
                                deleteHandler={() => deletePost(post.id)}
                            />))}
                        <div className={styles.unread_message_indicator}>
                            <span className={styles.unread_message_indicator_label}>Nya inlägg</span>
                        </div>
                        {posts.slice(-3).map(post => (
                            <Message
                                key={post.id}
                                post={post}
                                users={users}
                                deleteHandler={() => deletePost(post.id)}
                            />))}
                        {courseId && <AddMessage saveHandler={savePost} users={users} />}
                    </div>
                </div>
            );
    } else {
        return (<div></div>);
    }
}

export default Messages;
