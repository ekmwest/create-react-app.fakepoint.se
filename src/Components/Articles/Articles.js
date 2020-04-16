import React, { useState, useEffect } from 'react';
import styles from './Articles.module.css';
import api from '../../Code/api';
import User from '../User/User';
import fmt from '../../Code/fmt';
import css from './../Button.module.css';
import { Link } from 'react-router-dom';

function Articles({ courseId }) {
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
            <div>
                <div className={styles.articles}>
                <Link to={`/courses/${courseId}/articles`} className={[css.button, css.PRIMARY].join(' ')}>Ny artikal</Link>
                    {posts.map(post => (
                        <div className={styles.article}>
                            <div className={styles.header}>
                                <div className={styles.meta} ><User user={users.find(user => user.id === post.user_id)} /> <div className={styles.created_at}>{fmt.date(post.created_at)}</div></div>
                                <Link to={`/courses/${courseId}/articles/${post.id}`}  className={styles.title}>{post.title}</Link> 
                                <Link to={`/courses/${courseId}/articles/${post.id}`}  className={styles.content}>{post.content.split(' ').slice(0,10).join(' ')}...</Link>                                  
                            </div>
                            <div className={styles.comment_count}>{post.comments.length}</div>
                        </div>
                    ))}

                </div>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

export default Articles;
