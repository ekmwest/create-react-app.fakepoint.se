import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CourseNews() {
    let { id } = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://api.fakepoint.se/posts?course_id=${id}`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            })
    }, [id]);

    return (
        <>
            <h1>Course News</h1>
            {posts.map(post => (<p>{post.content}</p>))}
        </>
    );
}

export default CourseNews;
