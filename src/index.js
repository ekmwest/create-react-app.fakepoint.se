import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './Layouts/MasterLayout';
import StartPage from './Pages/StartPage';
import HomePage from './Pages/HomePage';
import UserProfile from './Pages/UserProfile';
import ProfilePage from './Pages/ProfilePage';
import CoursePostsPage from './Pages/CoursePostsPage';
import CoursePostPage from './Pages/CoursePostPage';
import CourseMessagesPage from './Pages/CourseMessagesPage';
import CourseQuestionsPage from './Pages/CourseQuestionsPage';
import CourseMessagePage from './Pages/CourseMessagePage';
import CourseArticlesPage from './Pages/CourseArticlesPage';
import CourseArticlePage from './Pages/CourseArticlePage';
import TestPage from './Pages/TestPage';
import NotFoundPage from './Pages/NotFoundPage';
import ScrollToTop from './Components/ScrollToTop';
import { SidebarContext } from './Contexts/SidebarContext';
import { isMobile } from './Code/utils';
import StartPageNotifications from './Pages/StartPageNotifications';
import NotificationSettings from './Pages/NotificationSettings';

ReactDOM.render(<App />, document.getElementById('app'));

function App() {
    const sidebarOpenDefault = () => !isMobile();
    const [sidebarOpen, setSidebarOpen] = useState(sidebarOpenDefault);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <BrowserRouter>
            <SidebarContext.Provider value={{ sidebarOpen, toggleSidebar }}>
                <ScrollToTop />
                <MasterLayout>
                    <Switch>
                        <Route path='/' exact>
                            <HomePage />
                        </Route>
                        <Route path='/start' exact>
                            <StartPage />
                        </Route>
                        <Route path='/learnpointprofile' exact>
                            <UserProfile />
                        </Route>
                        <Route path='/profile' exact>
                            <ProfilePage />
                        </Route>
                        <Route path='/startpagenotifications' exact>
                            <StartPageNotifications />
                        </Route>
                        <Route path='/notificationsettings' exact>
                            <NotificationSettings />
                        </Route>
                        <Route path='/courses/:id/news' exact>
                            <CoursePostsPage />
                        </Route>
                        <Route path='/courses/:id/news/:newsId' exact>
                            <CoursePostPage />
                        </Route>
                        <Route path='/courses/:id/posts' exact>
                            <CourseMessagesPage />
                        </Route>
                        <Route path='/courses/:id/questions' exact>
                            <CourseQuestionsPage />
                        </Route>
                        <Route path='/courses/:id/posts/:postId' exact>
                            <CourseMessagePage />
                        </Route>
                        <Route path='/courses/:id/articles' exact>
                            <CourseArticlesPage/>
                        </Route>
                        <Route path='/courses/:id/articles/:articleId' exact>
                            <CourseArticlePage/>
                        </Route>
                        <Route path='/test' exact>
                            <TestPage />
                        </Route>
                        <Route path='/'>
                            <NotFoundPage />
                        </Route>
                    </Switch>
                </MasterLayout>
            </SidebarContext.Provider>
        </BrowserRouter>
    );
}
