import React from 'react';
import Header from '../Header';
import About from '../About';
import Projetos from '../Projetos';
import Home from '../Home';
import Footer from '../Footer';



import './index.css';


function App() {



  return (
    <div id="app" className="App">
      <header>
          <Header/>
      </header>

      <main className="container">
        <section>
          <Home/>
        </section>

        <section>
          <About/>
        </section>

        <section>
          <Projetos />
        </section>

      </main>
      
      <Footer>
          <Footer />
      </Footer>
    </div>
  );
}

export default App;
