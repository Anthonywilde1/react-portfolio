import React, { Component } from 'react'
import { 
    Link
} from "react-router-dom";

export default class Resume extends Component {
    render() {
        return (
            <div class="resume">
                <h2>If you would like to download my Resume please follow the link below</h2>
                <Link to="/Anthony_Wilde_Resume.docx" target="_blank" download>My Resume</Link>                 
            </div>
        )
    }
}
