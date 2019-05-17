import React from 'react';
import Square from './square';

class App extends React.Component {

  render(){
      return (
        <div className='container'>
          {['green', 'yellow', 'blue'].map( (color) => 
            <Square key={color} color={color} />
          )}
        </div>
      );
      
  }

}

export default App;
