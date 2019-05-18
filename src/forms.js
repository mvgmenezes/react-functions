import React, {Component} from 'react'

class Forms extends Component {
    constructor(){
        super()
        this.state = {
            value: 'Input Controlled',
            checked: false,
            radio: false
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
                    <h3>Input Controlled - trabalho com state</h3>
                    <input type="text" value={this.state.value} onChange={this.entrouDadosNoInput}/>
                    <br />
                    <h3>Input Uncontrolled - NAO trabalho com state, uso o default do react</h3>
                    <input type="text" defaultValue='Input uncontrolled' />
                    <br />

                    <h3>Checkbox Controlled - trabalho com state</h3>
                    <label>
                        <input type="checkbox" checked={this.state.checked} onChange={(event) => {
                           console.log(event)
                           return this.setState({checked: event.target.checked})
                           }}/>Checkbox Controlled
                    </label>
                    <br />

                    <h3>Checkbox Uncontrolled - NAO trabalho com o state, uso o default do react</h3>
                    <label>
                        <input type="checkbox" defaultChecked='false'/>Checkbox uncontrolled
                    </label>

                    <br />
                    
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