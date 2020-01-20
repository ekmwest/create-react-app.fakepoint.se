import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Master from './Layouts/Master';
import Home from './Pages/Home';
import About from './Pages/About';
import CourseChannel from './Pages/CourseChannel';
import NotFound from './Pages/NotFound';

ReactDOM.render(<App />, document.getElementById('app'));

function App() {
    return (
        <BrowserRouter>
            <Master>
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/about' exact>
                        <About />
                    </Route>
                    <Route path='/course/:id/channel' exact component={CourseChannel}></Route>
                    <Route path='/' component={NotFound}></Route>
                </Switch>
            </Master>
        </BrowserRouter>
    );
}
