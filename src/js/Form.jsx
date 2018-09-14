import React, { Component } from 'react';
import Options from "./components/Options.jsx";

class Form extends Component {
  constructor(props){
    super(props);

    this.state = {
      goal: "Gain",
      units: "US Standard",
      sex: "Female",
      weight: null,
      height: null,
      age: null,
      activity: "10",
      TDEE: "2300 Calories"
    };
  }

  componentWillMount(){
    //this.calculate();
  }

  setForm = (type, option) => {
    var tempState = this.state;
    tempState[type] = option;
    this.setState(tempState);
  }

  inputValue = (evt) => {
    var option = evt.target.value;
    var type = evt.target.name;
    this.setForm(type, option);
  }

  sliderValue = (evt) => {
    var option = evt.target.value;
    var type = evt.target.name;
    this.setForm(type, option);
  }

  calculate = () => {
    if(this.state.height === null){
      return null;
    }

    var height = this.state.height;
    var weight = this.state.weight;
    var age = this.state.age;
    var BMR;

    if(this.state.units === "US Standard"){
      weight *= 0.453592;
      height *= 2.54;
    }


    if(this.state.sex === "Female"){
      BMR = 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);

    }
    else{
      BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
    }

    var activityLevel = 1.2;

    if(this.state.activity > 14){
      activityLevel = 1.9;
    }
    else if(this.state.activity > 8){
      var activityLevel = 1.725;
    }
    else if(this.state.activity > 6){
      var activityLevel = 1.55;
    }
    else if(this.state.activity > 3){
      var activityLevel = 1.375;
    }

    var TDEE = BMR * activityLevel;

    if(this.state.goal === "Gain"){
      TDEE += 350;
    }
    else if(this.state.goal === "Lose"){
      TDEE -= 350;
    }


    var tempState = this.state;
    this.props.setCalories(Math.round(TDEE));

  }



  render() {
    if(this.state == null){
      return null;
    }

    else{
      var weight_place = "120 lb";
      var height_place = "70 in";
      var age_place = "25";
      var activity_place = this.state.activity + "+ hrs/week";
      if(this.state.units === "Metric"){
        weight_place = "55 kg";
        height_place = "170 cm";
      }


      return (
        <form className="form">
          <div className="row">
            <div className="field col-sm-2">
              <p>Goal</p>
            </div>
            <div className="col-sm-10">
              <Options
                list={
                  [
                    "Gain",
                    "Maintain",
                    "Lose"
                  ]
                }
                type={"goal"}
                setForm={this.setForm}
                />
            </div>
          </div>

          <div className="row">
            <div className="field col-sm-2">
              <p>Units</p>
            </div>
            <div className="col-sm-10">
              <Options
                list={
                  [
                    "US Standard",
                    "Metric"
                  ]
                }
                type={"units"}
                setForm={this.setForm}
                />
            </div>
          </div>

          <div className="row">
            <div className="field col-sm-2">
              <p>Sex</p>
            </div>
            <div className="col-sm-10">
              <Options
                list={
                  [
                    "Female",
                    "Male"
                  ]
                }
                type={"sex"}
                setForm={this.setForm}
                />
            </div>
          </div>

          <div className="row">
            <div className="field col-sm-2">
              <p>Weight</p>
            </div>
            <div className="col-sm-10">
              <input className="input weight" type="number" name="weight" placeholder={weight_place} onChange={this.inputValue}/>
            </div>
          </div>

          <div className="row">
            <div className="field col-sm-2">
              <p>Height</p>
            </div>
            <div className="col-sm-10">
              <input className="input height" type="number" name="height" placeholder={height_place} onChange={this.inputValue}/>
            </div>
          </div>

          <div className="row">
            <div className="field col-sm-2">
              <p>Age</p>
            </div>
            <div className="col-sm-10">
              <input className="input age" type="number" name="age" placeholder={age_place} onChange={this.inputValue}/>
            </div>
          </div>

          <div className="row margin-below">
            <div className="field col-sm-2">
              <p>Activity</p>
            </div>
            <div className="col-sm-10">
              <input type="range" min="1" step="1" max="18" defaultValue="10" onChange={this.sliderValue} className="slider" name="activity" id="myRange"/>
              <div className="slider-info">
                {activity_place}
              </div>
            </div>
          </div>



          <div className="row">
            <div className="col-12">
              <button type='button' className="button" onClick={this.calculate}>Calculate</button>
            </div>
          </div>
        </form>
      );
    }

  }
}

export default Form;
