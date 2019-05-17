import React, {Component} from 'react';

//@@@funcao pura
/* const Title = ({name, lastname}}) => {
    return (
        <h1>{`${name} e o sobrenome ${lastName || 'No Sobrenome'}`}</h1>
    )
} */
//funcao pura em uma linha
/* const Title = (props) => <h1>{`${props.name} e o sobrenome ${props.lastName}`}</h1>

//Usando defaultprops 
Title.defaultProps = {
    name: 'Desconhecido',
    lastName: 'sobrenome'
} */

//@@@Criando classes
class Title extends Component {

    //passando uma propriedade que for padrao, caso não seja enviada a propriedade para a classe.
    static defaultProps = {
        name: 'Desconhecido',
        lastName: {
            first: '<Sem',
            last:' sobrenome>'
        }

    }
    render(){
        return (
        <div> 
            <div>teste</div> 
            <h1>{this.props.name + ' ,  ' +  this.props.lastName.first + this.props.lastName.last}</h1> 
        </div>);
    }

}

export default Title;
