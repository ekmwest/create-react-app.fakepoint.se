import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MasterLayout from './Layouts/MasterLayout';
import HomePage from './Pages/HomePage';
import CoursePostsPage from './Pages/CoursePostsPage';
import TestPage from './Pages/TestPage';
import NotFoundPage from './Pages/NotFoundPage';
import ScrollToTop from './Components/ScrollToTop'

ReactDOM.render(<App />, document.getElementById('app'));

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MasterLayout>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/courses/:id/posts' exact>
                        <CoursePostsPage />
                    </Route>
                    <Route path='/test' exact>
                        <TestPage />
                    </Route>
                    <Route path='/'>
                        <NotFoundPage />
                    </Route>
                </Switch>
            </MasterLayout>
        </BrowserRouter>
    );
}
