// https://www.carlrippon.com/react-drop-down-data-binding/
import React, { Component } from "react";

export default class CarMake extends Component {
    state = {
      makes: [],
      selectedMake: "",
     
    };
  
    componentDidMount() {fetch("http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}")
    .then((response) => {
      return response.json();
    })
    .then(data => {
      let makesFromApi = data.map(make => {
        return {value: make, display: make}
      });
      this.setState({
        makes: [{value: '', display: '(Select your favourite team)'}].concat(makesFromApi)
      });
    }).catch(error => {
      console.log(error);
    });}
  
    render() {
      return (
        <div>
          <select value={this.state.selectedMake}
              onChange={(e) => this.setState({selectedMake: e.target.value})}>
          {this.state.makes.map((make) => <option key={make.value} value={make.value}>{make.display}</option>)}
          </select>
        </div>
        
      )
      ;
    }
  }