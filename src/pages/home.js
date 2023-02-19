import React from 'react';
import './home.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="homepage">
                <div className="filepath">
                </div>
                <div className="textarea">
                </div>
            </div>
        );
    }
}

export default Home;