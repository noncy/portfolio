import React from 'react';
import './filebar.css';
import close from './close.svg'

class Idefile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {filename, handleSelected, selectedFile,handleCloseFile} = this.props;
        return(
            <div onClick={() => {handleSelected(filename)}} 
            className={`
            idefile ${selectedFile === filename ? "selected" : ""}`}>
            {filename} 
            <button onClick={() => {handleCloseFile(filename)}} className="closebtn material-symbols-outlined">close</button>
            </div>
        );
    }
}

class Filebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="filebar">
                {this.props.openFiles.map((file) => {
                    return (
                        <Idefile handleCloseFile = {this.props.handleCloseFile} handleSelected = {this.props.handleSelected} selectedFile = {this.props.selectedFile} filename = {file} />
                    )
                })}
            </div>
        );
    }
}


export default Filebar;