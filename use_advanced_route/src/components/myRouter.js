import React, {Component} from 'react';
import {Route,Switch} from "react-router-dom";
import Home from '../pages/home';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from "../pages/page3";
import Notfound from "../pages/notfound";

class MyRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/page1" component = {Page1} />
                <Route exact path = "/page2" component = {Page2} />
                <Route exact path = "/page3" component = {Page3} />
                 <Route component = {Notfound} />
                </Switch>
            </div>
        );
    }
}

export default MyRouter;