import React, {Component} from 'react'


class Timer extends Component{

    constructor(){
        super()
        this.state = {
            time: 0
        }

    }

    //verifica o props enviado antes de atualizar o props
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', this.props, nextProps)
    }
    componentDidMount(){
        //atribuindo o setInterval a uma variavel timer para poder destrui-la após finalizar a execução, para que naofique rodando apra sempre por ser assincrona
        /* this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1}
                )}, 1000) */
        
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }

    shouldComponentUpdate(nextProps, nextState){

        //console.log('shouldComponentUpdate' + this.props, nextProps);
        //return this.props.time !== nextProps.time
        return true;
    }

    //ultimo momento antes que o componente for renderizado
    //nao indicado mexer no estado nesse metodo.
    componentWillUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate' + this.props, nextProps);
    }
    

    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate', prevProps, prevState)
    }

    render(){
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer