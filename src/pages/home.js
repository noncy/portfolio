import React from 'react';
import './home.css'

import Editor from "@monaco-editor/react";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var content = 
        `import Home from 'portfolio';

        const welcomeMsg = "Welcome!"
        const name = "My name is Nancy"
        const uxe = "I'm an aspiring front-end developer based in San Jose, CA."
        `
        return(
            <div className="homepage">
                <div className="filepath">
                noncy > Component > home.js
                </div>
                <Editor 
                className ="editor"
                height ="100vh"
                width = "99%"
                defaultLanguage="javascript"
                minimap="false"
                theme="vs-dark"
                value={content} />
            </div>
        );
    }
}

export default Home;