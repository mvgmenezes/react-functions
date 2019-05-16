import React from 'react';
import Title from './title';

class App extends React.Component {

  render(){
      return <Title name="Marcus" lastName={{ first: 'Mene', last:'zes'}}/>;
  }

}

export default App;
