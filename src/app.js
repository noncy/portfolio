import React from 'react';

import Nav from './components/nav';
import Sidebar from './components/sidebar';
import Filebar from './components/filebar';
import Home from './pages/home';
import Projects from './pages/projects';
import About from './pages/aboutme';
import Contact from './pages/contact';



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
        this.state.openFiles.splice(index, 1);
    }

    render() {
        return(
            <>
            <Nav />
            <div className='bars'>
                <Sidebar handleOpenFile = {this.handleOpenFile} handleSelected = {this.handleSelected} selectedFile = {this.state.selectedFile} openFiles = {this.state.openFiles}/>
                <div className='content'>
                    <Filebar handleCloseFile = {this.handleCloseFile} handleOpenFile = {this.handleOpenFile} handleSelected = {this.handleSelected} openFiles = {this.state.openFiles} selectedFile = {this.state.selectedFile}/>
                    {this.state.selectedFile === 'home.js' ? <Home /> : <div/>}
                    {this.state.selectedFile === 'aboutme.js' ? <About /> : <div/>}
                    {this.state.selectedFile === 'projects.js' ? <Projects /> : <div/>}
                    {this.state.selectedFile === 'contact.js' ? <Contact /> : <div/>}
                </div>
            </div>
            </>
        );
    }
}

export default App;