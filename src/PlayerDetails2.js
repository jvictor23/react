import React from 'react'

class PlayerDetails2 extends React.Component{
    render(){
        return (
            
            <div>
                {this.props.jogador.nome}
                <div>
                {this.props.jogador.time}
            </div>
            <div>
                {this.props.jogador.pais}
            </div>
            </div>

        );
    }
}


export default PlayerDetails2