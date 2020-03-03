//IMPORTAR BIBLIOTECA

import React from 'react';
import ReactDOM from 'react-dom';
import PlayerDetails2 from './PlayerDetails2'
import PlayerDetails from './PlayerDetails'
import 'bootstrap/dist/css/bootstrap.css'

//CRIAR COMPONENTE


class App extends React.Component {

     jogadores = [
        {
           nome : "Lebron",
           time : "LA Lakers",
           pais : "USA"
        },
        {
            nome : "Alen Iverson",
            time : "Philadelfia",
            pais : "USA"
        },
        {
            nome : "Michael Jordan",
            time : "Chicago Bulls",
            pais : "USA"
        }
    ]

    constructor(props) {
        super(props);

        this.state = {
            indice: 0
        }

    }

    

    incrementarIndice = (event) =>{
        this.setState({
            indice: this.state.indice+1
        })
    }

    decrementarIndice = (event) =>{

            this.setState({
                indice: this.state.indice - 1
            })
        
        
    }

    render() {
        return (
            <div>

                <div
                    class="container">
                        <div class="container">
                    <h1>Jogadores</h1>
                    {this.jogador}
                </div>

                <PlayerDetails2 jogador = {this.jogadores[this.state.indice]}></PlayerDetails2>
                
                <div>
                    
                </div>


                    <button type="button" class="btn btn-danger" onClick={this.decrementarIndice}>
                        Anterior
                   </button>

                    <button type="button" class="btn btn-danger" onClick={this.incrementarIndice}>Proximo</button>


                </div>

            </div>



        );

    }

}

//MOSTRAR COMPONENTE NA TELA
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
