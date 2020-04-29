import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import styles from './UserProfile.module.css';
import api from '../Code/api';
import UserCard from '../Components/UserCard/UserCard';

function UserProfile() {

    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        api.get('/users', setUsers);
    }

    useEffect(loadUsers, []);

    return (
        <>
            <Header title="Usercards"></Header>
            <div className={styles.content}>
                <div className={styles.users}>
                    {users.map(user => (
                      <UserCard user={user}></UserCard>
                      ))}
                </div>
            </div>
        </>
    );
}

export default UserProfile;
