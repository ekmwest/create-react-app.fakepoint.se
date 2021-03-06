import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import AddPost from '../Post/AddPost';
import styles from './Posts.module.css';
import api from '../../Code/api';

function Posts({ courseId }) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    const loadPosts = () => {
        if(courseId) {
            api.get(`/posts?_expand=course&_embed=comments&course_id=${courseId}&_sort=created_at&_order=desc`, setPosts);
        } else {
            api.get(`/posts?_expand=course&_embed=comments&_sort=created_at&_order=desc`, setPosts);
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

    const saveComment = (comment) => {
        api.post('/comments', { content: comment.content, user_id: 7, post_id: comment.postId }, loadPosts);
    }

    const deletePost = postId => {
        api.delete(`/posts/${postId}`, loadPosts);
    }

    if (users.length && posts.length) {
        return (
            <div className={styles.posts}>
                {courseId && <AddPost saveHandler={savePost} users={users}/>}
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        users={users}
                        deleteHandler={() => deletePost(post.id)}
                        saveCommentHandler={saveComment}
                    />))}
            </div>
        );
    } else {
        return (<div></div>);
    }

}

export default Posts;