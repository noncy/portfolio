import React from 'react';
import './about.css';

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
                            <Card 
                            pos={'left'} 
                            name={'SKILLS'} 
                            isFlipped = {this.props.isFlipped} 
                            handleFlipped = {this.props.handleFlipped}>
                            <div className="leftcontent backcontent">
                                <section className="backleft">
                                    <p>js</p>
                                    <p>ts</p>
                                    <p>py</p>
                                </section>
                                <hr/>
                                <section className="backright">
                                    <p>react</p>
                                    <p>boq wiz</p>
                                    <p>angular</p>
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
                                    Dolore ad quis consectetur in ea aliquip cillum eiusmod nulla ullamco non anim fugiat irure. Minim ex duis minim veniam nisi ea. Ut quis qui sunt voluptate qui. Commodo tempor ea ad id aliquip consectetur labore aliquip. Labore occaecat minim culpa Lorem deserunt nostrud non non quis reprehenderit magna proident laborum excepteur. Aliquip ea voluptate et ullamco incididunt laboris aliquip sint aliquip consectetur. Magna minim ad duis ipsum pariatur amet consectetur deserunt est minim aliquip labore.
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