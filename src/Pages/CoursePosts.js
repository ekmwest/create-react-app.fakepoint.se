import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Components/Post/Post';
import CoursePage from '../Layouts/CoursePage';


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

    if (users.length > 0 && course) {
        return (
            <CoursePage>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        users={users}
                    />))}
            </CoursePage>
        );
    } else {
        return (<CoursePage></CoursePage>);
    }

}

export default CoursePosts;
