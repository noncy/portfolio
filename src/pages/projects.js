import React from 'react';
import right from '../svg/right.svg'
import stadia from '../svg/stadia.svg'
import './projects.css';

class Projectrow extends React.Component {
    render() {
        return(
            <div className="project">
                <div className="display">PLACEHOLDER</div>
                <hr/>
                <div className="aboutproj">
                    <div className="projtitle">
                       <img src={this.props.title}/> 
                    </div>
                    Tempor nisi pariatur culpa sit labore ullamco non. Nisi minim irure quis ex ea. Ex irure anim elit magna esse nulla duis in ex. Esse qui nisi officia in non ad amet laborum ut commodo nulla velit pariatur proident. Tempor deserunt ad adipisicing sint aliquip ut tempor esse ea velit culpa voluptate. Anim adipisicing tempor enim proident. Aliqua cillum sint sint laborum ut eiusmod mollit commodo eu ad ut nisi.
                </div>
            </div>
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
                    <Projectrow title={stadia}/>
                    <Projectrow title={"Title"}/>  
                    <Projectrow title={"Title"}/>  
                </div>
            </div>
        );
    }
}

export default Projects;