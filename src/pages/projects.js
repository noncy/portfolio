import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import right from '../svg/right.svg'
import stadia from '../svg/stadia.svg'
import './projects.css';
import settingsbefore from '../svg/settingsbefore.png';
import settingsafter from '../svg/settingsafter.png';
import skychat from '../svg/skychat.png';
import sky from '../svg/skychat.svg'

class Projectdesc extends React.Component {
    render() {
        return (
            <div className="aboutproj">
                <div className="projtitle">
                    <img src={this.props.title}/> 
                </div>
            {this.props.children}
        </div>
        );
    }
}

class Projectimg extends React.Component {
    render() {
        return(
        <>
            <div className="display">
                {this.props.children}
            </div>
            <hr/>
        </>
        )
    }
}

class Projects extends React.Component{
    render() {
        return(
            <div className="projectspage">
                <div className="filepath">
                noncy 
                <img src={right} alt="right arrow"/> 
                component 
                <img src={right} alt="right arrow"/> 
                projects.js
                </div>
                <div className="projectsimport">
                    <div className="import">
                        <span className="gray"> 1 </span>
                        <span className="pink">import </span>
                        <span className="blue">Projects </span>
                        <span className="pink">from </span>
                        <span className="orange">'nancy'</span>
                        <span>;</span>
                    </div>
                </div>
                <div className="projectcontent">
                    <div className="project">
                        <Projectimg>
                            <figure>
                               <img src={settingsbefore} alt="Settings menu before"/>
                               <figcaption>BEFORE</figcaption>
                            </figure>
                            <figure>
                                <img src={settingsafter} alt="Settings menu after"/>
                                <figcaption>AFTER</figcaption>
                            </figure>
                            
                        </Projectimg>
                        <Projectdesc title={stadia}>
                            <p>Stadia was a cloud gaming service developed and operated by Google. 
                            This project focuses on the mobile web settings menu, providing users a fullscreen menu modal. This was a redesign to improve accessibility and functionality.</p>
                        </Projectdesc>
                    </div>
                    <div className="project">
                        <Projectimg title={sky}>
                            <img src={skychat} alt="skychat"/>
                        </Projectimg>
                        <Projectdesc>
                            <p>This is an extension made to allow additional features to a chatting tool used at Google. Popout chat button, to allow for easier chatting while browsing related articles to the issue. Window resize feature, to enhance logs shared by users to fit and greater readability</p>
                        </Projectdesc>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;