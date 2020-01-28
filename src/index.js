import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './Layouts/MasterLayout';
import HomePage from './Pages/HomePage';
import CoursePostsPage from './Pages/CoursePostsPage';
import CoursePostPage from './Pages/CoursePostPage';
import TestPage from './Pages/TestPage';
import NotFoundPage from './Pages/NotFoundPage';
import ScrollToTop from './Components/ScrollToTop';
import { SidebarContext } from './Contexts/SidebarContext';
import { isMobile } from './Code/utils';

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
                        <Route path='/courses/:id/posts' exact>
                            <CoursePostsPage />
                        </Route>
                        <Route path='/courses/:id/posts/:postId' exact>
                            <CoursePostPage />
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
        </BrowserRouter >
    );
}
