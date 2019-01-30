import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import TopShort from "./TopShort";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component{

    render(){
        return(
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/h/top" component={TopShort} /> 
                </div>
            </Router>
        )
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}