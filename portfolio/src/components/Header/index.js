import React from "react";


import "./index.css"
import MenuIcon from '@mui/icons-material/Menu';


export default() => {
    return(
        
        <navbar className="navbar">
            <h1>AL</h1>
            <div className="menu">
                    <MenuIcon />
            </div>
            <ul className="navbar--ul">
                
                <li>
                    <a href="#app">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about">
                        Sobre
                    </a>
                </li>
                <li>
                    <a href="#projects">
                        Projetos
                    </a>
                </li>
                
            </ul>
        </navbar>
    )
}