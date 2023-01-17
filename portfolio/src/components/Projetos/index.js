import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

import "./index.css";

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';


import Netflix from "../Img/netflix.jpeg";
import Pagina_de_filmes from "../Img/pagina_de_filmes.jpeg";
import Loja from "../Img/loja.png";

export default() => {


    return(
        <div id="projects" className="container--projects">
             <h2>Projetos</h2>
            <Splide hasTrack={ false } aria-label="...">
                <SplideTrack>
                        <SplideSlide>
                                    
                                <div className="projects">
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
                                    <a target="_blank" href="https://alanls1.github.io/NetFlix_react/">
                                        Visualizar
                                    </a>
                                </div>

                        </SplideSlide>
                        <SplideSlide>
                                <div className="splide__slide projects">
                                    <div>
                                        <img src={Pagina_de_filmes} />
                                    </div>
                                    <div className="title--description">
                                        <h3>Página de Filmes</h3>
                                        <p>
                                        Página de filmes que faz consumo de dados externos, dados esses que são providos da API do TMDB, que faz uma listagem de filmes com informações sobre os mesmo, ao longo desse desenvolvimento, foi adquirida muitas skill, tais como a lidar com bugs ao fazer a requisição, boas praticas na organização dos arquivos, conceitos sobre OOP(programação orientada a objeto). 
                                        </p>
                                        <p>Tecnologias: HTML, CSS, JavaScript e React.js </p>
                                    </div>
                                    <a target="_blank" href="https://alanls1.github.io/filmes/#/">
                                        Visualizar
                                    </a>
                                </div>
                        </SplideSlide>
                        
                        <SplideSlide>
                                <div className="splide__slide projects">
                                    <div>
                                        <img src={Loja} />
                                    </div>
                                    <div  className="title--description">
                                        <h3>Loja</h3>
                                        <p>
                                            Loja que adiciona um produto ao carrinho.
                                        </p>
                                        <p>Tecnologias: HTML, CSS e JavaScript </p>
                                    </div>
                                    <a target="_blank" href="https://alanls1.github.io/loja/">
                                        Visualizar
                                    </a>
                                </div>
                        
                        </SplideSlide>
                </SplideTrack>

                <div className="splide__progress progressBar">
                    <div className="splide__progress__bar" />
                </div>

            </Splide>
  
        </div>
    )
}