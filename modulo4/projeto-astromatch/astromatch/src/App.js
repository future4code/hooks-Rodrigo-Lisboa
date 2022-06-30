import React from "react"
import styled from 'styled-components'
import Tela from "./Components/TelaInicial/Tela"
import Matches from './Components/TelaMatches/Matches'
import { useState } from 'react'
 

const App = () => {
  const [pagina, setPagina] = useState('home');
  const changePage = () => {
    if (pagina === 'home') {
      setPagina('matches');
    } else if (pagina === 'matches') {
      setPagina('home');
    }
    console.log(pagina);
  };

}

export default App;