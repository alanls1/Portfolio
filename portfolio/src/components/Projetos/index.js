import React from "react";

import "./index.css"
import Netflix from "../Img/netflix.jpeg"
import Pagina_de_filmes from "../Img/pagina_de_filmes.jpeg"
import Loja from "../Img/loja.png"
import building from "../Img/building.png"

export default() => {
    return(
        <div id="projects" className="container--projects">
            <h2>Projetos</h2>

            <div className="projects">
                <div className="projects--info">
                    <div>
                        <img src={Netflix}/>
                    </div>
                    <div className="title--description">
                        <h3>Clone da Netflix</h3>
                        <p>
                            Interface da Netflix, com API TMDB
                        </p>
                        <p>Tecnologias: HTML, CSS, JavaScript e React.js </p>
                    </div>
                    <a>
                        Visualizar
                    </a>
                </div>

                <div className="projects--info">
                    <div>
                        <img src={Pagina_de_filmes} />
                    </div>
                    <div className="title--description">
                        <h3>Página de Filmes</h3>
                        <p>
                            Páginade filmes, que utiliza a API TMDB, com funcionalidades de pesquisa e informação sobre o filme  
                        </p>
                        <p>Tecnologias: HTML, CSS, JavaScript e React.js </p>
                    </div>
                    <a>
                        Visualizar
                    </a>
                </div>

                <div className="projects--info">
                    <div>
                        <img src={Loja} />
                    </div>
                    <div  className="title--description">
                        <h3>Loja</h3>
                        <p>
                            Loja com um carrinho de compras, que adiciona, remove e edita o produto.
                        </p>
                        <p>Tecnologias: HTML, CSS e JavaScript </p>
                    </div>
                    <a>
                        Visualizar
                    </a>
                </div>

                <div className="projects--info"> 
                    <div>
                        <img src={building} style={{
                            width: 200,
                        }}/>
                    </div>
                    <div className="title--description">
                        <h3>Sistema de login</h3>
                        <p className="building">
                            Building...
                        </p>
                        
                        
                    </div>
                    <a>
                        Visualizar
                    </a>
                </div>
            </div>
        </div>
    )
}