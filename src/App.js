import React from 'react';
import Square from './square';
import Title from './title';
import Button from './button';

class App extends React.Component {

  clicouNaDiv(){
    console.log('Clicou');
    //alert('Clicou');
  }


  render(){
      return (
        
        <div className='container' onClick={this.clicouNaDiv}>
          <Title name="Marcus" />
          
          <Button>Teste</Button>

          <Button>
            <span>Teste com children </span>
          </Button>


          {['green', 'yellow', 'blue', 'green'].map( (color, index) => 
            <Square key={index} color={color} />
          )}
        </div>
      );
      
  }

}

export default App;
