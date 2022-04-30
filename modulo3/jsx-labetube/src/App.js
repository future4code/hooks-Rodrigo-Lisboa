import React from "react";
import "./App.css";
import CardVideo from "./Components/CardVideo";
import MenuItem from "./Components/MenuItem";
//  import ComponenteHeader from "./Components/ComponenteHeader";

export default function App() {
  const titulo = "Título do vídeo";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1> LabeTube </h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
                <MenuItem item={'Inicio'}/>
                <MenuItem item={'Em Alta'}/>
                <MenuItem item={'Inscrições'}/>
                <MenuItem item={'Originais'}/>
                <hr />
                <MenuItem item={'Biblioteca'}/>
                <MenuItem item={'Histórico'}/>
                
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo imagem={"https://picsum.photos/400/400?a=1"} titulo={"Video 1"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=2"} titulo={"Video 2"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=3"} titulo={"Video 3"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=4"} titulo={"Video 4"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=5"} titulo={"Video 5"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=6"} titulo={"Video 6"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=7"} titulo={"Video 7"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=8"} titulo={"Video 8"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=9"} titulo={"Video 9"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=10"} titulo={"Video 10"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=11"} titulo={"Video 11"}/>
            <CardVideo imagem={"https://picsum.photos/400/400?a=12"} titulo={"Video 12"}/>
          </section>
        </main>

        <footer>
          <h4>Olá!!! Eu sou o footer!</h4>
        </footer>
      </div>
    </div>
  );
}

