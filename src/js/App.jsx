import React, { Component } from 'react';
import Display from './Display.jsx';
import Menu from './Menu.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      calories: 2000
    };
  }

  setCalories = (c) =>{
    this.setState({calories: c})
  }

  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <React.Fragment>
          <div class="row row-eq-height">
            <div class="col-lg-4 p-0">
              <div class="display">
                <div class="heading">
                  <h1>{this.state.calories} Calories</h1>
                </div>
              </div>
            </div>
            <div class="col-lg-8 p-0">
              <Menu
                setCalories={this.setCalories}
              />
            </div>
          </div>
        </React.Fragment>
      );
    }

  }
}

export default App;
