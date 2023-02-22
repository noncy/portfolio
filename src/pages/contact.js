import React from 'react';
import noncy from '../svg/noncy.png'
import right from '../svg/right.svg'
import './contact.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactcard" onAnimationEnd={this.props.afterHover}>
                <div className="contactphoto">
                    <img src={noncy} alt="noncy"/>
                </div>
                <hr/>
                <ul className="contacts">
                    <Cont ico = "mail" contactinfo = "Email" linkpath = "mailto:nancy@noncy.dev"/>
                    <Cont ico = "linkedin" contactinfo = "Linkedin" linkpath= "https://www.linkedin.com/in/lenancy/"/>
                    <Cont ico = "git" contactinfo = "Github" linkpath= "https://github.com/noncy"/>
                    <Cont ico ="resume" contactinfo="Resume"/>
                </ul>
            </div> 
        );  
    }
}

class Cont extends React.Component {
    render() {
        return(
            <li className="links">
                <span className={`icon ${this.props.ico}`}></span>
                <a href={this.props.linkpath} target="_blank">{this.props.contactinfo}</a>
            </li>
        );
    }
}

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {isReceived: false}
    }

    afterHover = () => {
        this.setState({isReceived: !this.state.isReceived});
        setTimeout(()=> {
            this.setState({isReceived: !this.state.isReceived})
        }, 2000);
        console.log(this);
    }

    render() {
        const {contactinfo, ico} = this.props;
        return(
            <div className="contactpage">
                <div className="filepath">
                noncy 
                <img src={right} alt="right arrow"/> 
                component 
                <img src={right} alt="right arrow"/> 
                contact.js
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
                    <h2>Take a card</h2>
                    <Card afterHover = {this.afterHover}/>
                    <div className={`receive ${this.state.isReceived ? "show" : ""}`}>
                        Card received!
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;