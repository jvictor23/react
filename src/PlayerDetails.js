// Importar Bibliotecas
import React from 'react';

// Criar componentes
const PlayerDetails = (props) => {
    return (
        <div>
        <h1>{props.nome}</h1>
    <h2>{props.time}</h2>
    <h3>{props.pais}</h3>
        </div>
    );
}

//Exportar componentes
export default PlayerDetails;