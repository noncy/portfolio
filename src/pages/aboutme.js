import React from 'react';
import './about.css';

class About extends React.Component{
    render() {
        return(
            <div className="aboutpage">
                <div className="filepath">
                noncy > Component > contact.js
                </div>
                <div className="aboutcontent">
                    <div className="import">
                        <span className="gray"> 1 </span>
                        <span className="pink">import </span>
                        <span className="blue">Nancy </span>
                        <span className="pink">from </span>
                        <span className="orange">'nancy'</span>
                        <span>;</span>
                    </div>
                    <div className="aboutme">
                        <div className="title-header">
                            <span>A</span>
                            <span>B</span>
                            <span>O</span>
                            <span>U</span>
                            <span>T</span>

                        </div>
                        <div className="cards">
                            <div className="left">
                                <div className="cardtitle">
                                    <h2>SKILLS</h2>
                                </div>
                            </div>
                            <div className="middle">
                                <div className="cardtitle">
                                   <h2>HISTORY</h2> 
                                </div>
                            </div>
                            <div className="right">
                                <div className="cardtitle">
                                    <h2>PERSONAL</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;