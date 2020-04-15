import React, { useState, useEffect } from 'react';
import styles from './MessageBoard.module.css';
import api from '../../Code/api';
import User from '../User/User';
import fmt from '../../Code/fmt';

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


    if (users.length && posts.length) {
        return (
            <div className={styles.messages_container}>
                <div className={styles.messages}>
                    {posts.map(post => (
                        <div className={styles.message}>
                            <div>
                                <User user={users.find(user => user.id === post.user_id)} />
                                <div className={styles.title}>{post.title}...</div>
                            </div>
                            <div className={styles.date}> {fmt.date(post.created_at)}</div>
                        </div>
                    ))}

                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default Messages;
