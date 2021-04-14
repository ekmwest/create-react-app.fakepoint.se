import React, { useState } from 'react';
import Header from '../Components/Header/Header';
import styles from './NotificationSettings.module.css';
import { Link } from 'react-router-dom';


function NotificationSettings() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    return (
        <>
            <Header title="Notification settings"></Header>
            <div className={styles.notification_settings}>
                <div className={styles.notification_settings_container}>
                    <div className={styles.notifications_page}>
                        <Link to="/startpagenotifications" className={styles.notifications_page_link}>Back</Link>
                    </div>
                    <h3>
                        Notification settings
                    </h3>
                    <div className={styles.notification_settings_course_list}>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>JavaScript 3 </div>
                                <div>
                                    <input type="checkbox" id="1" className={styles.checkbox} onChange={() => setOpen1(!open1)}/>
                                    <label for="1" className={styles.switch} ></label>
                                </div>
                            </div>
                            <div className={open1 ? styles.notification_settings_type_list_open : styles.notification_settings_type_list}>
                                <div className={styles.notification_settings_type}>

                                    <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Comments on result items </div>
                                        <div>
                                            <input type="checkbox" id="7" className={styles.checkbox} />
                                            <label for="7" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Newsfeed</div>
                                        <div>
                                            <input type="checkbox" id="8"  checked="checked" className={styles.checkbox} />
                                            <label for="8" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Logbook </div>
                                        <div>
                                            <input type="checkbox" id="9" className={styles.checkbox} />
                                            <label for="9" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Survey to answer</div>
                                        <div>
                                            <input type="checkbox" id="10" className={styles.checkbox} />
                                            <label for="10" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>LIA approval </div>
                                        <div>
                                            <input type="checkbox" id="11" checked="checked" className={styles.checkbox} />
                                            <label for="11" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Submissions</div>
                                        <div>
                                            <input type="checkbox" id="12" checked="true" className={styles.checkbox} />
                                            <label for="12" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>Informationsarkitektur </div>
                                <div>
                                    <input type="checkbox" id="2" className={styles.checkbox} onChange={() => setOpen(!open)} />
                                    <label for="2" className={styles.switch} ></label>
                                </div>
                            </div>
                            <div className={open ? styles.notification_settings_type_list_open : styles.notification_settings_type_list}>
                                <div className={styles.notification_settings_type}>

                                    <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Comments on result items </div>
                                        <div>
                                            <input type="checkbox" id="7" className={styles.checkbox} />
                                            <label for="7" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Newsfeed</div>
                                        <div>
                                            <input type="checkbox" id="8"  checked="checked" className={styles.checkbox} />
                                            <label for="8" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Logbook </div>
                                        <div>
                                            <input type="checkbox" id="9" className={styles.checkbox} />
                                            <label for="9" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Survey to answer</div>
                                        <div>
                                            <input type="checkbox" id="10" className={styles.checkbox} />
                                            <label for="10" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>LIA approval </div>
                                        <div>
                                            <input type="checkbox" id="11" checked="checked" className={styles.checkbox} />
                                            <label for="11" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className={styles.notification_settings_type}>
                                    
                                <div className={styles.notification_settings_course_header}>
                                        <div className={styles.notification_settings_course_name}>Submissions</div>
                                        <div>
                                            <input type="checkbox" id="12" checked="true" className={styles.checkbox} />
                                            <label for="12" className={styles.switch} ></label>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>LIA - Flygplats</div>
                                <div>
                                    <input type="checkbox" id="3" className={styles.checkbox} />
                                    <label for="3" className={styles.switch} ></label>
                                </div>
                            </div>

                        </div>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>Teknikkurs 1</div>
                                <div>
                                    <input type="checkbox" id="4" className={styles.checkbox} />
                                    <label for="4" className={styles.switch} ></label>
                                </div>
                            </div>
                        </div>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>Grundläggande teori och praktik</div>
                                <div>
                                    <input type="checkbox" id="5" className={styles.checkbox} />
                                    <label for="5" className={styles.switch} ></label>
                                </div>
                            </div>

                        </div>
                        <div className={styles.notification_settings_course}>
                            <div className={styles.notification_settings_course_header}>
                                <div className={styles.notification_settings_course_name}>
                                    Arbetsmiljö och säkerhet</div>
                                <div>
                                    <input type="checkbox" id="6" className={styles.checkbox} />
                                    <label for="6" className={styles.switch} ></label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default NotificationSettings;
