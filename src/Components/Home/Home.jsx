import { useState } from "react";
import {StyledHome} from "./style.jsx";
import vermelho1 from "../../assets/images/vermelho 1.png";
import amarelo1 from "../../assets/images/amarelo 1.png";
import laranja1 from "../../assets/images/laranja 1.png";

import laranja2 from "../../assets/images/laranja2x 1.png";
import vermelho2 from "../../assets/images/vermelho2x 1.png";
import amarelo2 from "../../assets/images/amarelo2x 1.png";


export default function Home () {

    const [copo, setCopo] = useState (laranja2);
    const [cores, setCores] = useState('#037143');

    const corLaranja = () => {
        setCopo(laranja2);
        setCores("#037143");
      };
      const corVermelho = () => {
        setCopo(vermelho2);
        setCores("#97090C");
      };
      const corAmarelo = () => {
        setCopo(amarelo2);
        setCores("#DECD13");
      };




    return (
        <StyledHome>
      
            <section id= "texto1">
                <div id="texto2">
            <h2>Mais que Café</h2>
          <h1>
            Isso é <span> Starbucks</span>
          </h1>
            <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
        <button id= "bt" onClick={() => setMensagem('Obrigado por querer saber mais!')}>SAIBA MAIS</button>
                </div>

        <div id="elipse" style={{backgroundColor: cores}}>
          <img id="copo2" src={copo} alt=" copo grande" />
        </div>

        </section>
        
        <section id = "variedades">

        <button className="sabores" onClick={corLaranja}>
        <img src={laranja1} alt="Copolaranjap"/>
        </button>

        <button className="sabores" onClick={corVermelho}>
        <img src={vermelho1} alt="Copovermelhop"/>
        </button>

        <button className="sabores" onClick={corAmarelo}>
        <img src={amarelo1} alt="Copoamarelop"/>
        </button>


        </section>

            </StyledHome>

    );
};