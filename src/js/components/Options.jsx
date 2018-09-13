import React, { Component } from 'react';
import Option from './Option.jsx';

class Options extends Component {
  constructor(props){
    super(props);

    this.state = {
      options:[
        {
          text: null,
          selected: true
        }
      ]
    };
  }

  componentWillMount(){
    var tempState = this.state;
    for(let i = 0; i < this.props.list.length; i++){
      tempState.options[i]={
        text: this.props.list[i],
        selected: false
      }
    }
    tempState.options[0].selected = true;

    this.setState(tempState);
  }

  optionSelected = (index, type) =>{
    var tempState = this.state;

    for(let i = 0; i < tempState.options.length; i++){
      if(i === index){
        tempState.options[i].selected = true;
      }
      else{
        tempState.options[i].selected = false;
      }
    }

    this.props.setForm(type, tempState.options[index].text);

    this.setState(tempState);
  }



  render() {
    if(this.state == null){
      return null;
    }
    else{
      return (
        <div className="options">
          {this.state.options.map((i, index) => (
            <Option
              key={index}
              index={index}
              text={i.text}
              selected={i.selected}
              clicked={this.optionSelected}
              type={this.props.type}
            />
          ))}
        </div>
      );
    }

  }
}

export default Options;
