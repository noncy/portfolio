import React from 'react';
import './contact.css';
import nancy from '../Nancy_Le_.png'

class Cont extends React.Component {
    render() {
        return(
            <li className="links">
                <span className={`icon ${this.props.ico}`}></span>
                <p>{this.props.contactinfo}</p>
            </li>
        );
    }
}

class Contact extends React.Component{
    render() {
        const {contactinfo, ico} = this.props;
        return(
            <div className="contactpage">
                <div className="filepath">
                noncy > Component > contact.js
                </div>
                <div className="contactcontent">
                    <div className="import">
                        <span className="gray"> 1 </span>
                        <span className="pink">import </span>
                        <span className="blue">Contact </span>
                        <span className="pink">from </span>
                        <span className="orange">'nancy'</span>
                        <span>;</span>
                    </div>
                </div>
                <div className="contact">
                    <div className="contactcard">
                        <div className="contactphoto">
                            <img src={nancy}/>
                        </div>
                        <hr/>
                        <ul className="contacts">
                            <Cont ico = "mail" contactinfo = "Email"/>
                            <Cont ico = "linkedin" contactinfo = "Linkedin" />
                            <Cont ico = "git" contactinfo = "Github"/>
                            <Cont ico ="resume" contactinfo="Resume"/>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;