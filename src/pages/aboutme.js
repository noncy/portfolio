import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './about.css';
import right from '../svg/right.svg';
import js from '../svg/js.svg';
import ts from '../svg/ts.svg';
import py from '../svg/py.svg';
import html from '../svg/html.svg';
import css from '../svg/css.svg';
import react from '../svg/react.svg';
import ang from '../svg/angular.svg';
import figma from '../svg/figma.svg';
import gitb from '../svg/gitb.svg';
import boba1 from '../svg/boba.jpeg';
import boba2 from '../svg/boba2.jpeg';
import kb from '../svg/kb.jpeg';
import lulu from '../svg/lulu.jpg';
import lyla from '../svg/lyla.jpeg';
import lylu from '../svg/lylu.jpeg';
import cookies from '../svg/pbcookies.jpeg';




class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped: false};
    }
    
    handleFlipped = () => {
        this.setState({isFlipped: !this.state.isFlipped});
    }

    render() {
        return(
            <div className=
            {`${this.props.pos} ${this.state.isFlipped ? "flipped" : ""}`}
            onClick={this.handleFlipped}>
                <div className="front">
                    <div className="cardtitle">
                        <h2>{this.props.name}</h2>
                    </div>
                </div>
                <div className="back">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class About extends React.Component{
    constructor(props){
        super(props);
        
    }

    
    render() {
        return(
            <div className="aboutpage">
                <div className="filepath">
                noncy 
                <img src={right} alt="right arrow"/>
                component 
                <img src={right} alt="right arrow"/> 
                aboutme.js
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
                            <Card 
                            pos={'left'} 
                            name={'SKILLS'} 
                            isFlipped = {this.props.isFlipped} 
                            handleFlipped = {this.props.handleFlipped}>
                            <div className="leftcontent backcontent">
                                <section className="backleft">
                                    <img src={js} alt="js"/>
                                    <img src={ts} alt="ts"/>
                                    <img src={html} alt="html"/>
                                    <img src={css} alt="css"/>
                                    <img src={py} alt="py"/>
                                </section>
                                <hr/>
                                <section className="backright">
                                    <img src={react} alt="react"/>
                                    <img src={ang} alt="angular"/>
                                    <img src={gitb} alt="git bash"/>
                                    <img src={figma} alt="figma"/>
                                </section>
                            </div>
                            </Card>
                            <Card 
                            pos={'middle'} 
                            name={'EXPERIENCE'} 
                            isFlipped = {this.props.isFlipped} 
                            handleFlipped = {this.props.handleFlipped}>
                            <div className="middlecontent backcontent">
                                <section className="topmiddle">
                                    <h4>Stadia</h4>
                                    <div className="job">
                                        <p>Mountain View,CA</p>
                                        <p>UX Engineer (Rotation)</p>
                                        <p>Jul 21 - Oct 21</p>
                                    </div>
                                    <div className="jobdesc">
                                        Qui labore excepteur elit eu et laboris velit sit. Elit qui duis eu ad irure proident officia laborum commodo. Et dolore enim consectetur consectetur tempor occaecat nisi fugiat ipsum cillum. Esse cupidatat incididunt consectetur laboris labore sint minim ut anim velit magna qui id.
                                    </div>
                                </section>
                                <hr/>
                                <section className="bottommiddle">
                                    <h4>Google</h4>
                                    <div className="job">
                                        <p>Mountain View,CA</p>
                                        <p>Corporate Operations Engineer</p>
                                        <p>Feb 20 - Mar 23</p>
                                    </div>
                                    <div className="jobdesc">
                                        Est anim reprehenderit labore velit. Irure velit culpa laborum magna ad irure occaecat Lorem Lorem nisi qui. Lorem exercitation duis esse elit veniam voluptate in consequat anim. Non dolore aute excepteur do tempor commodo in. Reprehenderit nisi amet irure est.
                                    </div>
                                </section>
                            </div>
                            </Card>
                            <Card 
                            pos={'right'} 
                            name={'PERSONAL'} 
                            isFlipped = {this.props.isFlipped} 
                            handleFlipped = {this.props.handleFlipped}>
                            <div className="rightcontent backcontent">
                                <div className="righttext">
                                    <div className="hobby">
                                        <h4>INTERESTS</h4>
                                        <ul>
                                            Some of my interests and hobbies include: <br/>
                                            <li>Video games - </li>
                                            <li>Boba - </li>
                                            <li>Cats - </li>
                                            <li>Keyboards - </li> 
                                            <li>Baking</li>
                                        </ul>
                                        <Slider
                                        autoplay="2000"
                                        previousButton=""
                                        nextButton=""
                                        >
                                        <img src={cookies}/>
                                        <img src={boba1}/>
                                        <img src={boba2}/>
                                        <img src={lyla}/>
                                        <img src={lulu}/>
                                        <img src={lylu}/>
                                        <img src={kb}/>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;