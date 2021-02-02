import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Projects from "./Projects"
import Resume from "./Resume"
import Contactme from "./Contactme"
import Welcome from "./Welcome"


export default class Nav extends Component {
    render() {
        return (
            <Router>
                <header class="header">
                    <h4 class="copyright"><small>&copy;Anthony Wilde's Portfolio</small></h4>
                    <nav class="nav">
                        <li>
                            <Link to="/">Welcome</Link>
                        </li> 
                        <li>
                            <Link to="/Projects">Projects</Link>
                        </li> 
                        <li>
                            <Link to="/Resume">Resume</Link>
                        </li> 
                        <li>
                            <Link to="/Contactme">Contact Me</Link>
                        </li> 
                    </nav>
                    <Switch>
                        <Route path="/Projects">
                            <Projects />
                        </Route>
                        <Route path="/Resume">
                            <Resume />
                        </Route>
                        <Route path="/Contactme">
                            <Contactme/>
                        </Route>
                        <Route path="/">
                            <Welcome />
                        </Route>
                    </Switch>
                </header>
            </Router>
        )
    }
}
