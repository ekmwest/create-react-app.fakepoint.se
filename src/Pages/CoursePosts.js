import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Components/Post/Post';


function CoursePosts() {
    let { id } = useParams();
    const [course, setCourse] = useState(null);
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

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
        fetch(`https://api.fakepoint.se/posts?_embed=comments&course_id=${id}`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(posts => setPosts(posts));
    }, [id]);

    useEffect(() => {
        fetch(`https://api.fakepoint.se/courses/${id}`, {
            headers: {
                'Authorization': 'Basic ZFhObGNtNWhiV1U2Y0dGemMzZHZjbVE6YldVNmNHRnpjZFhObGNtNWhiV1U2Y0dGemMzZHZjbVFiV1U2Y0dGemM='
            }
        })
            .then(res => res.json())
            .then(course => setCourse(course));
    }, [id]);

    if(users.length > 0 && course) {
        return (
            <>
                <h1>{course.name}</h1>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        users={users}
                    />))}
            </>
        );
    } else {
        return (<></>);
    }

}

export default CoursePosts;
