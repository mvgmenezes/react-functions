import React, {Component} from 'react'

class Forms extends Component {
    constructor(){
        super()
        this.state = {
            value: 'Teste inicial'
        }
        //bind no final para informar que o this dentor da funcao é o this da classe Forms
        this.entrouDadosNoInput = this.entrouDadosNoInput.bind(this);
    }
    //como o render retorna uma coisa estatica, somente o input, quando renderizado nao permite
    //alterar o conteudo do input, para isso deve criar o  metodo onChange e passar a alteracao via 
    //state.
    render(){
        return (
            <div>
                <form>
                    <input type="text" value={this.state.value} onChange={this.entrouDadosNoInput}/>
                    <input type="text" defaultValue='Valor Inicial' />
                </form>
            </div>
        )
    }

    entrouDadosNoInput(event){
        console.log(event)
        this.setState({value: event.target.value})
    }
}

export default Forms