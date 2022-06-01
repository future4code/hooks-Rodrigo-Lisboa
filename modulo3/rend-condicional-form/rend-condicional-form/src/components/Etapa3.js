import React from 'react';



export default class Etapa3 extends React.Component{
  render() {
    return (
      <div>
        <h1>Informações Gerais de Ensino</h1>

        <h2>Por que você não terminou um curso de graduação?</h2>
        <input>Digite aqui</input>

        <h2>Você fez algum curso complementar</h2>
        <select>
          <option value = "0"> Nenhum </option> 
          <option value = "1"> Curso Técnico   </option>
          <option value = "2"> Curso de Inglês </option>
          <br/>
          <button>Próxima etapa</button>
        </select>
        
      </div>
    );
  }
}
