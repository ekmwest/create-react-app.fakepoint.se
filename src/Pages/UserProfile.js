import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './UserProfile.module.css';
import { Link } from 'react-router-dom';

function UserProfile() {

    const [userCard1Open, setUserCard1Open] = useState(false);
    const [userCard2Open, setUserCard2Open] = useState(false);
    const [userCardFlip, setUserCardFlip] = useState(false);
    const [userCardImageSlide, setUserCardImageSlide] = useState(false);
    const userCard1CssClass = () => userCard1Open ? `${styles.usercard_1}  ${styles.open}` : `${styles.usercard_1}`;
    const userCard2CssClass = () => userCard2Open ? `${styles.usercard_2}  ${styles.open}` : `${styles.usercard_2}`;
    const overlayCssClass = () => userCard1Open ? `${styles.overlay}  ${styles.open}` : `${styles.overlay}`;
    const userCardFlipCssClass = () => userCardFlip ? `${styles.usercard_v5}  ${styles.flip}` : `${styles.usercard_v5}`;
    const userCardImageSlideCssClass = () => userCardImageSlide ? `${styles.usercard_v10}  ${styles.slide}` : `${styles.usercard_v10}`;   
  


    return (
        <>
            <Header title="LearnPoint profile"></Header>
            <div className={overlayCssClass()}></div>
            <div className={styles.content}>
                <div className={styles.users}>

                    <div className={styles.user_1} onClick={() => setUserCard1Open(!userCard1Open)}>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                <img src="/icons/user-4.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Raechal H
                            </div>
                        </div>
                        <div className={userCard1CssClass()}>
                            <div className={styles.close} onClick={() => setUserCard1Open(!userCard1Open)}><img src="/icons/close.png" alt="close"></img></div>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-4.jpeg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.full_name}>Raechal Hamilton</div>
                                <div className={styles.meta}>rachel.hamilton@fakepoint.se</div>
                                <div className={styles.meta}>08759789</div>
                            </div>
                        </div>
                        <div className={styles.note}>Click to display user modal</div>
                    </div>
                    <div className={styles.user_2} onClick={() => setUserCard2Open(!userCard2Open)}>
                        <div className={styles.header}>
                            <div className={styles.avatar}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.name}>
                                Hasse H
                            </div>
                        </div>
                        <div className={userCard2CssClass()}>
                            <div className={styles.close} onClick={() => setUserCard2Open(!userCard2Open)}> <img src="/icons/close.png" alt="close"></img></div>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.full_name}>Hasse Hannson</div>
                                <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                                <div className={styles.meta}>08759789</div>
                            </div>
                        </div>
                        <div className={styles.note}>Click to display user card</div>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.header}>
                            <div className={styles.avatar} >
                                <img src="/icons/user-c.jpg" alt="User"></img>
                            </div>
                            <div className={styles.name} >
                                Sandy R
                            </div>
                        </div>
                        <div className={styles.usercard}>
                            <div className={styles.avatar_big}>
                                <img src="/icons/user-c.jpg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.full_name}>Sandy Richard</div>
                                <div className={styles.meta}>sandy.richard@fakepoint.se</div>
                                <div className={styles.meta}>08759789</div>
                            </div>
                        </div>
                        <div className={styles.note}>Hover to display user card</div>
                    </div>
                </div>
            </div>
            <div className={styles.card_design}>
                <div className={styles.cards}>
                    <div className={styles.usercard_v1}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08759789</div>
                            <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                        </div>
                    </div>
                    <div className={styles.usercard_v2}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08759789</div>
                            <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                        </div>
                    </div>
                    <div className={styles.usercard_v4}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08759789</div>
                            <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                        </div>
                    </div>

                    <div className={styles.usercard_v6}>
                        <div className={styles.profile}>
                            <div className={styles.avatar_image}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.full_name}>Hasse Hannson</div>
                                <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                                <div className={styles.meta}>08786547</div>
                                <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                            </div>
                        </div>
                        <div className={styles.id_title}>ID card</div>
                        <div className={styles.id_card}>
                            <div className={styles.avatar_image}>
                                <img src="/icons/user-b.jpg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <   div className={styles.label}>Name</div>
                                <div className={styles.full_name}>Hasse Hannson</div>
                                <div className={styles.label}>Social security number</div>
                                <div className={styles.meta}>19870901-7827</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.usercard_v3}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08759789</div>
                        </div>
                    </div>
                    <div className={styles.usercard_v7}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.label}>Name</div>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.label}>Email</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.label}>Telephone</div>
                            <div className={styles.meta}>08535678</div>
                        </div>
                    </div>
                </div>s
                <div className={styles.cards}>

                    <div className={userCardFlipCssClass()}>
                        <div className={styles.card_content}>
                            <div className={styles.front}>
                                <div className={styles.avatar_image}>
                                    <img src="/icons/user-a.jpg" alt="User"></img>
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.full_name}>Hasse Hannson</div>
                                    <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                                    <div className={styles.meta} onClick={() => setUserCardFlip(!userCardFlip)}>Click me to see my ID</div>
                                    <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                                </div>
                            </div>
                            <div className={styles.back}>
                                <div className={styles.avatar_image}>
                                    <img src="/icons/user-b.jpg" alt="User"></img>
                                </div>
                                <div className={styles.details}>
                                    <   div className={styles.label}>Name</div>
                                    <div className={styles.full_name}>Hasse Hannson</div>
                                    <div className={styles.label}>Social security number</div>
                                    <div className={styles.meta}>19870901-7827</div>
                                    <div className={styles.meta} onClick={() => setUserCardFlip(!userCardFlip)}>Back</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.usercard_v8}>
                        <div className={styles.avatar_image}>
                            <img src="/icons/user-a.jpg" alt="User"></img>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08786547</div>
                            <div className={styles.meta}>Hover to see ID card</div>
                        </div>
                        <div className={styles.card_overlay}>
                            <div className={styles.id_card}>
                                <div className={styles.school_photo}>
                                    <img src="/icons/user-b.jpg" alt="User"></img>
                                </div>
                                <div className={styles.details}>
                                    <   div className={styles.label}>Name</div>
                                    <div className={styles.full_name}>Hasse Hannson</div>
                                    <div className={styles.label}>Social security number</div>
                                    <div className={styles.meta}>19870901-7827</div>
                                    <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.usercard_v9}>
                        <div className={styles.card_info}>
                            <div className={styles.avatar_image}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.details}>
                                <div className={styles.full_name}>Hasse Hannson</div>
                                <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                                <div className={styles.meta}>08786547</div>
                                <Link className={styles.link_to_profile} to={`/profile`}>View profile</Link>
                            </div>
                        </div>
                        <div className={styles.card_overlay}>
                            <div className={styles.id_card}>
                                <div className={styles.id_card_title}>
                                    ID card
                                </div>
                                <div className={styles.school_photo}>
                                    <img src="/icons/user-b.jpg" alt="User"></img>
                                </div>
                                <div className={styles.details}>
                                    <div className={styles.label}>Name</div>
                                    <div className={styles.full_name}>Hasse Hannson</div>
                                    <div className={styles.label}>Social security number</div>
                                    <div className={styles.meta}>19870901-7827</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={userCardImageSlideCssClass()}>
                        <div className={styles.user_images}>
                            <div className={styles.avatar_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                                <img src="/icons/user-a.jpg" alt="User"></img>
                            </div>
                            <div className={styles.school_image} onClick={() => setUserCardImageSlide(!userCardImageSlide)}>
                                <img src="/icons/user-b.jpg" alt="User"></img>
                            </div>
                        </div>
                        <div className={styles.details}>
                            <div className={styles.full_name}>Hasse Hannson</div>
                            <div className={styles.meta}>hasse.hannson@fakepoint.se</div>
                            <div className={styles.meta}>08759789</div>
                            <Link className={styles.link_to_profile} to={`/profile`}>Gå till profil</Link>
                            <Link className={styles.link_to_profile} to={`/profile`}>Ändra roll</Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default UserProfile;
