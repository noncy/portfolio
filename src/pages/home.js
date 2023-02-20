import React from 'react';
import './home.css'

import Editor from "@monaco-editor/react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="homepage">
                <div className="filepath">
                noncy > Component > home.js
                </div>
                <div className="homecontent">
                    <div className="import">
                        <span className="gray"> 1 </span>
                        <span className="pink">import </span>
                        <span className="blue">Home </span>
                        <span className="pink">from </span>
                        <span className="orange">'portfolio'</span>
                        <span>;</span>
                    </div>
                    <div className="welcome">
                        <span>WELCOME!</span>
                        <p>My name is Nancy</p>
                        <p>I'm an aspiring UX Engineer based in San Jose, CA.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;