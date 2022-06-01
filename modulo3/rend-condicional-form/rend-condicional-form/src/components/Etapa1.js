import React from 'react';

export default class Etapa1 extends React.Component{
  render() {
    return (
      <div>
        <h1>Dados Gerais</h1>

        <h2>Digite o seu nome</h2>
        <input>Digite seu nome aqui</input>

        <h2>Qual a sua idade?</h2>
        <input>Digite sua idade aqui</input>

        <h2>3. Qual seu e-mail?</h2>
        <input>Digite o seu e-mail aqui</input>

        <h2>4. Qual o seu grau de escolaridade?</h2>
        <select>
          <option value = "1">  Ensino médio completo    </option> 
          <option value = "2">  Ensino médio incompleto  </option>
          <option value = "3">  Ensino superior completo  </option>
          <option value = "4">  Ensino superior incompleto  </option>
          <br/>
          <button>Próxima etapa</button>
        </select>
        
      </div>
    );
  }
}
