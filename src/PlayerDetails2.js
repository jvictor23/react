import React from 'react'
import PlayerDetails from './PlayerDetails';

class PlayerDetails2 extends React.Component{
    render(){
        return (

            <div>
                {this.props.jogador.nome}
            </div>

        );
    }
}


export default PlayerDetails2