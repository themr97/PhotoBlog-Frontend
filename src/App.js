import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';
import Container from 'react-bootstrap/Container'


import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

var phantom = {
    display: 'block',
    padding: '10px',
    height: '10px',
    width: '100%',
}

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "relative",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
}

const App = () => {
    return (
        <BrowserRouter>
            <Zoom>
                <Container>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    <div>
                    <div style={phantom} />
                    <div style={style}>
                        <Footer />
                    </div>
                </div>
                </Container>
            </Zoom>
        </BrowserRouter>

    )
}

export default App
