import React, { Component } from 'react';
import Display from './Display.jsx';
import Menu from './Menu.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      date: null,
      diary:{
        breakfast:[null],
        lunch:[null],
        dinner:[null],
        snacks:[null]
      }
    };
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <Menu />
        </React.Fragment>
      );
    }

  }
}

export default App;
