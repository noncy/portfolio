import React from 'react';

import Nav from './components/nav';
import Sidebar from './components/sidebar';
import Filebar from './components/filebar'


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openFiles: [],
            selectedFile: ""
        }
    }

    handleOpenFile = (filename) => {
        if(this.state.openFiles.includes(filename)){
            return
        }
        this.setState({openFiles: [...this.state.openFiles, filename]});
        console.log(this.state);
    }

    handleSelected = (filename) => {
        this.setState({selectedFile: filename});
    }
    
    handleCloseFile = (filename) => {
        let index = this.state.openFiles.indexOf(filename);
        console.log(this.state.openFiles, index)
        this.setState({openFiles: [this.state.openFiles.splice(index, 0)]});
    }

    render() {
        return(
            <>
            <Nav />
            <div className='content'>
            <Sidebar handleOpenFile = {this.handleOpenFile} handleSelected = {this.handleSelected} selectedFile = {this.state.selectedFile} />
            <Filebar handleCloseFile = {this.handleCloseFile} handleOpenFile = {this.handleOpenFile} handleSelected = {this.handleSelected} openFiles = {this.state.openFiles} selectedFile = {this.state.selectedFile}/>
            </div>
            </>
        );
    }
}

export default App;