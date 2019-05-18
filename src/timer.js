import React, {Component} from 'react'


class Timer extends Component{

    constructor(){
        super()
        this.state = {
            time: 0
        }

    }

    componentDidMount(){
        //atribuindo o setInterval a uma variavel timer para poder destrui-la após finalizar a execução, para que naofique rodando apra sempre por ser assincrona
        this.timer = setInterval(() => {
            this.setState({time: this.state.time + 1}
                )}, 1000)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
        clearInterval(this.timer)
    }
    render(){
        return <div>Timer: {this.state.time}</div>
    }
}

export default Timer