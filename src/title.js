import React from 'react';

class Title extends React.Component {

    //passando uma propriedade que for padrao, caso não seja enviada a propriedade para a classe.
    static defaultProps = {
        name: 'Desconhecido',
        lastName: 'Sem sobrenome'
    }
    
    render(){
        return (
        <div> 
            <div>teste</div> 
            <h1>{this.props.name + ' e o sobrenome ' +  this.props.lastName}</h1> 
        </div>);
    }

}

export default Title;
