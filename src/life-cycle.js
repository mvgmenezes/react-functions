import React, { Component } from 'react'
import Timer from './timer';

class LifeCycle extends Component {

    constructor(){
        console.log('constructor app')
        super()
        this.state = {
            text: 'texto',
            time: 0,
            showTimer: true
        }
    }

    //tambem executa no lado do servidor e no front end, por isso nao eh bom exeutar
    //pois o componente ainda nao esta no DOM pois é willMount
    componentWillMount(){
        console.log('componenteWillMount app')
    }

    //executado apos o componente ser montado no DOM, esse metodo é usado quadno preciso realizar
    //manipulacao de DOM como uma biblioteca externa. Executa somente no Frontend
    componentDidMount(){
        console.log('componenteDidMout app')
    }


    render(){
        console.log('render')
        return (
            <div>
                {this.state.showTimer && <Timer time={this.state.time}/> }

                <button onClick={() => {
                    this.setState({time: this.state.time + 10})
                }}>Add 10 </button>
                <br />
                <button onClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}> Show / Hidder </button>
            </div>
        );
    }
}

export default LifeCycle