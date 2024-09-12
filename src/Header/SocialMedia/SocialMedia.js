import React from "react"
import gitHub from '../../img/github.png'
import linkedId from '../../img/linkedin.png'
import './SocialMedia.css'

export default function SocialMedia(){
    return(
        <div className="socialMedia">
            <img class='img' src={gitHub}/>
            <img class='img' src={linkedId}/>
        </div>
    )
}