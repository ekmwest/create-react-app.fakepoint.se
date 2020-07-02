import React from 'react';
import Header from '../Components/Header/Header';
import styles from './ProfilePage.module.css';
import css from '../Components/Button.module.css';

function ProfilePage() {

    return (
        <>
            <Header title="Profile Page"></Header>
            <div className={styles.content}>
                <div className={styles.profile_image}>
                    <img src="/icons/user-3.jpeg" alt="User"></img>
                </div>
                <div className={styles.profile_image_nav_container}>
                    <div className={styles.profile_image_nav}>
                        <div className={styles.SELECTED}>Profilbild</div>
                        <div>Skolfoto</div>
                    </div>
                </div>
                <div className={styles.profile_image_explainer}>
                    * Endast lärare och skola kan se ditt skolfoto
                </div>
                <div className={styles.attributes}>
                    <div className={styles.attribute}>
                        <div className={styles.attribute_name}>Name</div>
                        <div className={styles.attribute_value}>
                            <textarea name="displayname" />
                        </div>
                    </div>
                    <div className={styles.attribute}>
                        <div className={styles.attribute_name}>Email</div>
                        <div className={styles.attribute_value}>
                            <textarea name="displayname" />
                        </div>
                    </div>
                    <div className={styles.attribute}>
                        <div className={styles.attribute_name}>Telephone</div>
                        <div className={styles.attribute_value}>
                            <textarea name="displayname" />
                        </div>
                    </div>
                    <div className={styles.attribute}>
                        <div className={styles.attribute_name}>Address</div>
                        <div className={styles.attribute_value}>
                            <textarea name="displayname" />
                        </div>
                    </div>
                </div>
                <div className={styles.save}>
                    <button className={[css.button, css.PRIMARY, css.BLOCK, css.BIG].join(' ')}>Save</button>
                </div>
            </div>
        </>


    );
}

export default ProfilePage;
