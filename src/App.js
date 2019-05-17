import React from 'react';
import Square from './square';
import Title from './title';

class App extends React.Component {

  clicouNaDiv(){
    console.log('Clicou');
    alert('Clicou');
  }


  render(){
      return (
        
        <div className='container' onClick={this.clicouNaDiv}>
          <Title name="Marcus" />

          {['green', 'yellow', 'blue', 'green'].map( (color, index) => 
            <Square key={index} color={color} />
          )}
        </div>
      );
      
  }

}

export default App;
