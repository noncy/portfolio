import React from 'react';
import './home.css'
import leftarrow from '../leftarrow.svg'

import Editor from "@monaco-editor/react";

class Modal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {modalClose: false};
    }

    handleModal = () => {
        this.setState({modalClose: !this.state.modalclose})
        console.log(this)
    }

    render() {
        return(
            <div className={`modalcomp ${this.state.modalClose ? "hide" : ""}`}>
                <div className="modalcontent">
                    <img src={leftarrow} className="arrow"></img>
                    <p className="info">Click here to view all the available files</p>
                    <button className="helpclosebtn material-symbols-outlined" onClick={this.handleModal}>close</button>
                </div>
            </div>
        );
    }
}

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
                    <Modal handleModal = {this.props.handleModal}/>
                </div>
            </div>
        );
    }
}

export default Home;