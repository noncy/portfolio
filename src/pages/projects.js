import React from 'react';

class Projects extends React.Component{
    render() {
        return(
            <div className="projectspage">
                <div className="filepath">
                noncy > Component > contact.js
                </div>
                <div className="projects">
                    <div className="import">
                        <span className="gray"> 1 </span>
                        <span className="pink">import </span>
                        <span className="blue">Projects </span>
                        <span className="pink">from </span>
                        <span className="orange">'nancy'</span>
                        <span>;</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;