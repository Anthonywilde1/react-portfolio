import React, { Component } from 'react'
import keesydrivingschool from "./images/keesydrivingschool.png"
import blackjack from './images/Blackjack.png'
import mememarket1 from "./images/Mememarket1.png"
import mememarket2 from "./images/Mememarket2.png"

export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <div class="project1">
                    <h2>Keesy Driving School App</h2>
                    <p>I did this project in partnership with <a href="https://www.linkedin.com/in/syeda-ismat-farjana/">Syeda Ismat Farjana</a> it was a full MERN stack application
                    in which I did primarily the back-end of it. This was the final project of Coder Academy and we worked on it for over a month, with about a month of planning of the app
                    before we started to code it too. We were both incredibly happy with how it turned out. Please note if you want to check it out the website may take several 
                    minutes to load because it is on a free service</p>
                    <img src={keesydrivingschool} alt="drivingschool"/>
                    <p><a href="http://keesydrivingschool.herokuapp.com/">Keesy Driving School</a></p>
                </div>
                <div class="project2">
                    <h2>Playing Cards</h2>
                    <p>During a 'Hackathon' we were tasked with creating an app in javascript using API's from the internet. I partnered up with <a href="https://www.linkedin.com/in/lachlyn-reynolds-256768197/">Lachylyn Reynolds</a> to
                     create a card game website using a Deck of cards API. It was done over a three day window and we both worked seperately on a game each. I did blackjack while Lachlyn did go fish. While the site is a little rough looking
                     I am happy with what I learned and the logic that I mangaged to install into the blackjack game. Please note the nav bar link for Blackjack doesnt work but the welcome page link does.</p>    
                    <img src={blackjack} alt="blackjack"/>
                    <p><a href="https://determined-sammet-019422.netlify.app/">Blackjack</a></p>
                </div>
                <div class="project3">
                    <h2>Meme market</h2>
                    <p>During our time learning Ruby and Ruby on rails at coder academy we were tasked with coming up with a marketplace application for an assessment.
                        I decided that I would make an application for the buying and selling of memes on the internet. It was a successful application that I was very happy with.
                        While it wasn't the prettiest to look at the application had a SQL relational database that was implemented correctly, allowing users to create accounts.
                        Add their memes to their account and buy and sell memes with other users of the site. To do this I also had to have functioning image buckets and payment systems
                        in place. Comments on memes were also implemented. While the idea wasn't the best the overall functionality of my website was something I am still quite proud of.
                    </p>
                    <img src={mememarket1} alt="Meme marketplace 1"/>
                    <img src={mememarket2} alt="Meme marketplace 2"/>
                    <p><a href="https://meme-market-6969.herokuapp.com/users">Meme market</a></p>
                </div>
            </div>
        )
    }
}
