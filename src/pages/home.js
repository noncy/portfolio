import React from 'react';
import './home.css'
import leftarrow from '../svg/leftarrow.svg'
import right from '../svg/right.svg'
import nancy from '../svg/Nancy_Le_.png'

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
                noncy
                <img src={right} alt="right arrow"/> 
                component 
                <img src={right} alt="right arrow"/> 
                home.js
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
                        <div className="circle">
                            <img src={nancy} alt="nancy"/>
                        </div>
                        <div className="welcomemsg">
                            <span>WELCOME!</span>
                            <p>My name is Nancy</p>
                            <div className="rollingtxt">
                                I am a
                                <span>Frontend Engineer</span>
                                <span>Boba lover</span>
                                <span>Keyboard enthusiast</span>
                                <span>Cat mom</span>
                                <span>Gamer</span>
                            </div>
                        </div>
                    </div>
                    <Modal handleModal = {this.props.handleModal}/>
                </div>
            </div>
        );
    }
}

export default Home;