import React,  { useState, useEffect }  from 'react';
import User from '../User/User';
import styles from './Message.module.css';
import fmt from '../../Code/fmt';
import { Link } from 'react-router-dom';

function Message({ post, users, deleteHandler }) {

    const comments = () => post.comments.length > 0 ? post.comments.length == 1 ? post.comments.length + " Kommentar" : post.comments.length + " Kommentarer" : "";
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.message}>
            <div className={styles.header}>
                <User user={users.find(user => user.id === post.user_id)} bigUserAvatar />
                <div className={styles.meta}>
                    <div>{fmt.date(post.created_at)}</div>
                </div>
                <div className={menuOpen ? `${styles.menu} ${styles.open}` : `${styles.menu}`} >
                    <img src="/icons/dots-menu.png" className={styles.menu_icon} onClick={() => setMenuOpen(!menuOpen)}></img>
                    <div className={styles.menu_items}>
                        <div className={styles.menu_item}> <Link to={`/courses/${post.course.id}/messages/${post.id}`} >Reply</Link></div>
                        <div className={styles.menu_item} onClick={deleteHandler}>Delete</div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {post.content}
                <div>
                    <Link to={`/courses/${post.course.id}/messages/${post.id}`} className={styles.total_comments}>{comments()}</Link>
                </div>
            </div>
        </div>
    );
}

export default Message;
