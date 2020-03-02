//IMPORTAR BIBLIOTECA
import React from 'react';
import ReactDOM from 'react-dom';

import PlayerDetails from './PlayerDetails'
//CRIAR COMPONENTE
const App = () => {
    const textoBotao = "Clique aqui";
	return <div>
    <PlayerDetails nome="Michael Jordan" time = "Chicago Bulls" pais = "EUA"></PlayerDetails>
    <PlayerDetails nome="Lebron James" time = "Los Angeles Lakers" pais = "EUA"></PlayerDetails>
    <PlayerDetails nome="Koby Bryant" time = "Los Angeles Lakers" pais = "EUA"></PlayerDetails>
    </div>;
}
//MOSTRAR COMPONENTE NA TELA
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
  )
