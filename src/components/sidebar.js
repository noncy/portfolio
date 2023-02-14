import React from 'react';
import './sidebar.css';

class File extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {filename, isOpen, handleOpenFile, selectedFile,handleSelected} = this.props;
        return(
            <li onClick={() => {
                handleSelected(filename)
                handleOpenFile(filename)}} 
            className={
                `files 
                ${isOpen ? "show" : ""}
                ${selectedFile === filename ? "selectedside" : ""}
                `}>{filename}
            </li>
        );
    }
}

class Folder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
    };

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        const isOpen = this.state.isOpen;
        return(
                <ul className={isOpen ? "openfolder" : "closedfolder"}>
                <li >
                <div className= 'folderhover' onClick={this.handleToggle}>{this.props.foldername}</div>
                    <ul className={`folders ${isOpen ? "show openfolder" : "hidden closedfolder"}`}>
                    {this.props.children}
                    </ul>   
                </li>
                </ul>     
        );
    }
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='sidebar'>
                <h3>EXPLORER</h3>     
                <div className="current">
                    <Folder foldername = {'OPEN PAGES'}>
                    </Folder>
                </div>
                
                <hr />
                <div className='allpages'>
                    <Folder foldername = {'NONCY'}>
                        <Folder foldername = {'components'}>
                            <File handleOpenFile = {this.props.handleOpenFile} handleSelected = {this.props.handleSelected} selectedFile = {this.props.selectedFile} filename = {'home.js'} />
                            <File handleOpenFile = {this.props.handleOpenFile} handleSelected = {this.props.handleSelected} selectedFile = {this.props.selectedFile} filename = {'aboutme.js'} />
                            <File handleOpenFile = {this.props.handleOpenFile} handleSelected = {this.props.handleSelected} selectedFile = {this.props.selectedFile} filename = {'projects.js'} />
                            <File handleOpenFile = {this.props.handleOpenFile} handleSelected = {this.props.handleSelected} selectedFile = {this.props.selectedFile} filename = {'contact.js'} />
                        </Folder>
                    </Folder>
                    
                </div>
            </div>
        )
    }
}

export default Sidebar;