import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "./App.css";

const APIKey = "408c2762fda8a0e89a3a75fd0d84dbcc";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

      fetch(API)
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error(`${response.status} Przerwano działanie fetch`);
        })
        .then((response) => response.json())
        .then((data) => {
          const date = new Date().toLocaleString();
          this.setState((prevState) => ({
            date: date,
            city: prevState.value,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            err: false,
          }));
        })
        .catch((err) => {
          this.setState((prevState) => ({
            err: true,
            city: prevState.value,
          }));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
