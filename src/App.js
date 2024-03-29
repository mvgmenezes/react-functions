import React from 'react';
import Square from './square';
import Title from './title';
import SearchButton from './search-button';
import LikeButton from './like-button';
import LifeCycle from './life-cycle';
import Button from './button';
import Forms from './forms';

class App extends React.Component {

  constructor (){
    super();
    //quando se trabalha com state, no constructor eh o momento de setar o state da app
    this.state = {
      text: 'MarcusMenezes',
      checked: false,
      showContent: false

    }
  }

  render(){
      return (

        //trabalhando como setstate assincrono
        //como ele é assincrono posso chamar a funcao de callback do set state para executar algum codigo
        <div>
          <input 
          type='checkbox' 
          checked={this.state.checked} 
          onChange={() => {
            this.setState({
              checked: !this.state.checked
            },()=> {
              this.setState({showContent: this.state.checked})
            })
          }} />

          {this.state.showContent && <div>Olha eu aqui checkado</div>}

        </div>
        

        //trabalhando com form
        /*<Forms />*/

        /* //trabalhando com propTypes
        <Button > Clique em mim</Button> */


        //trabalhando com ciclo de vida
        /* <LifeCycle /> */

        //trabalhando com state
        //tudo que muda na aplicação, é chamado de state, e é manipulado 
        //pelo Stateful
        //StateFul - Componente que manipula o estado da aplicacao (State), nesse caso o App.js é Stateful
        //Para ser um componente Stateful, precisa ser uma class extendendo o Component do React, em função pura ele nao funciona
/*         <div className="container" onClick={ () => this.setState({
            text: 'Outro texto'
          })}>
          {this.state.text}
        </div> */
        
        //passando os dados via props
        /*{ <div className='container' onClick={this.clicouNaDiv}>
          <Title name="Marcus" />
          <LikeButton />
          <SearchButton />

          {['green', 'yellow', 'blue', 'green'].map( (color, index) => 
            <Square key={index} color={color} />
          )}
         
        </div> }*/
      );
      
  }

  clicouNaDiv(){
    console.log('Clicou');
    //alert('Clicou');
  }


}

export default App;
