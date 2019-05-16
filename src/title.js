import React from 'react';

class Title extends React.Component {


  render(){
      return (
        <div> 
          <div>teste</div> 
          <h1>{this.props.name}</h1> 
        </div>);
  }

}

export default Title;
