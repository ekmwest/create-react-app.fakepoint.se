import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import AddPost from '../Post/AddPost';


function Posts({ courseId }) {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);


    const loadPosts = () => {
        fetch(`https://api.fakepoint.se/posts?_embed=comments&course_id=${courseId}&_sort=created_at&_order=desc`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(posts => setPosts(posts));
    }

    useEffect(() => {
        fetch(`https://api.fakepoint.se/users`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(users => setUsers(users));
    }, []);


    useEffect(() => {
        loadPosts();
    }, [courseId]);

    const savePost = post => {
        console.log(post);
        fetch(`https://api.fakepoint.se/courses/${courseId}/posts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM=',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: post.content, user_id: 1 })
        })
            .then(response => response.json())
            .then(post => {
                console.log(post);
                post.comments = [];
                setPosts([post, ...posts]);
            });
    }

    const saveComment = (comment) => {
        console.log(comment);
        fetch(`https://api.fakepoint.se/comments`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM=',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: comment.content, user_id: 3, post_id: comment.postId })
        })
            .then(response => response.json())
            .then(post => {
                console.log(post);
                loadPosts();
            });
    }

    const deletePost = postId => {
        fetch(`https://api.fakepoint.se/posts/${postId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM=',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(post => {
                console.log(post);
                setPosts(posts.filter(p => p.id !== postId));
            });
    }

    if (users.length && posts.length) {
        return (
            <div>
                <AddPost saveHandler={savePost} />
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