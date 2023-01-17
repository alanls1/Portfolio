import React from "react";

import "./index.css";
import Self from "../Img/self.jpg"


export default() => {
    return(
        <div id="about" className="about">
            <h2>Sobre</h2>

            <div className="about--description">

                <div className="self">
                    <img src={Self}/>
                </div>

                <div>
                    <p>
                        Olá, meu nome é Alan, tenho 22 anos, apaixonado por games,  música e amo aprender coisas novas.  Atualmente estou cursando Ciências da computação segundo semestre na UNIP.
                        Conto com um objetivo de ser um grande profissional na área da tecnologia, contribuindo com a comunidade de dev's e da empresa da qual farei parte, a princípio com grande foco em front-end.
                        <br/>

                        Estudo sobre lógica de programação diariamente, possuo alguns projetos pessoais no GitHub, como forma de experiência.

                        <br/>
                        Tecnologias que utilizo: HTML, CSS, JavaScript e React.js.
                    </p>
                    
                </div>
                
            </div>
            

            
        </div>
    )
}