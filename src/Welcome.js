import React, { Component } from 'react'
import photo from "./images/2021-02-01-121838.jpg"

export default class Welcome extends Component {
    render() {
        return (
            <div class="Welcome">
               
                <h1>Greetings</h1>
                <h3>Welcome to my portfolio</h3>
                <img src={photo} alt="me" />
                <p>
                    My name is Anthony Wilde I am a 26 year old male who lives in Melbourne Victoria. I am a full stack developer with a preference for back-end.
                    I like video games, playing and doing extreme sports like snowboarding and wakeboarding. Please have a look around my portfolio site made in
                    React. Throughout the site you will see examples of my work done in different languages (Ruby and Javascript). Feel free to contact me either <a href="./Contactme.js">here</a> or on my <a href="https://www.linkedin.com/in/anfiiwilde/">Linked In.</a> 
                </p>
                
            </div>
        )
    }
}
