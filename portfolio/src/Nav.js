import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                 <header>
                <h4><small>&copy;Anthony Wilde's Portfolio</small></h4>
                <nav>
                    <a href="./Welcome.js">Welcome</a>
                    <a href="./Projects.js">Projects</a>
                    <a href="./Contactme.js">Contact Me</a>
                    <a href="./Resume.js">Resume</a>
                </nav>
            </header>
            </div>
        )
    }
}
