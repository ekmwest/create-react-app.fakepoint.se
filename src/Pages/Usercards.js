import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/Header';
import styles from './Usercards.module.css';
import User from '../Components/User/User';
import api from '../Code/api';

function Usercards() {

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
                        <div className={styles.user}>
                        <User
                            key={user.id}
                            user={user}
                            bigUserAvatar
                        /> </div>)
                        )}
                </div>
            </div>
        </>
    );
}

export default Usercards;
