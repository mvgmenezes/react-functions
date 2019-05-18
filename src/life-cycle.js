import React, { Component } from 'react'
import Timer from './timer';

class LifeCycle extends Component {

    constructor(){
        console.log('constructor')
        super()
        this.state = {
            text: 'texto',
            showTimer: true
        }
    }

    //tambem executa no lado do servidor e no front end, por isso nao eh bom exeutar
    //pois o componente ainda nao esta no DOM pois é willMount
    componentWillMount(){
        console.log('componenteWillMount')
    }

    //executado apos o componente ser montado no DOM, esse metodo é usado quadno preciso realizar
    //manipulacao de DOM como uma biblioteca externa. Executa somente no Frontend
    componentDidMount(){
        console.log('componenteDidMout')
    }

    componentWillUnmount(){

    }

    render(){
        console.log('render')
        return (
            <div>
                {this.state.showTimer && <Timer /> }

                <button onClick={() => {
                    this.setState({showTimer : !this.state.showTimer})
                }}>Show / Hide timer </button>
            </div>
        );
    }
}

export default LifeCycle