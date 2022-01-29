import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import Main from './components/MainComponent';
import { CAMPSITES } from './shared/campsites';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    };
}

export default App;