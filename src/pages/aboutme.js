import React from 'react';

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
                </div>
            </div>
        );
    }
}

export default About;