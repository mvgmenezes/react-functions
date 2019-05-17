import React from 'react';
import Square from './square';

class App extends React.Component {

  render(){
      return (
        <div className='container'>
          {['green', 'yellow', 'blue', 'green'].map( (color, index) => 
            <Square key={index} color={color} />
          )}
        </div>
      );
      
  }

}

export default App;
