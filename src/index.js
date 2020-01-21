import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Master from './Layouts/Master';
import Home from './Pages/Home';
import CoursePosts from './Pages/CoursePosts';
import NotFound from './Pages/NotFound';
import ScrollToTop from './Components/ScrollToTop'

ReactDOM.render(<App />, document.getElementById('app'));

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Master>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/courses/:id/posts' exact>
                        <CoursePosts />
                    </Route>
                    <Route path='/'>
                        <NotFound />
                    </Route>
                </Switch>
            </Master>
        </BrowserRouter>
    );
}
