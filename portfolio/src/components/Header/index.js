import React from "react";


import "./index.css"

export default() => {
    return(

        <navbar className="navbar">
            <h1>AL</h1>
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