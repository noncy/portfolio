import React from 'react';

class Contact extends React.Component{
    render() {
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
            </div>
        );
    }
}

export default Contact;