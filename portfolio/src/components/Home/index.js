import React from "react";

import "./index.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import Linkedin from "../Img/Linkedin.png"
import greet from "../Img/greet.png"


export default() => {
    return(
        <div className="home">
            <div className="title">
                <h1>Alan Lima</h1>
                <p>Desenvolvedor jr</p>
                <ul className="contact">
                    <li className="img--Linkedin">
                        <img src={Linkedin}/>
                        <a target="_blank" href={"https://www.linkedin.com/in/alan-lima-3584a41b9?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BXXSeqm2TLucfI5QcO3hoA%3D%3D"}>
                            linkedin
                        </a>
                    </li>

                    <li>
                        <GitHubIcon/>
                        <a target="_blank" href="https://github.com/alanls1/alanls1" >
                             GitHub
                        </a>
                    </li>
                </ul>
            </div>
            
            <div className="greet">
                <img  src={greet} />
            </div>
            
        </div>
    )
}