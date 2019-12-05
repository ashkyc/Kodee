import React from "react";
import "./App.css";
// import AddressForm from "./components/addressForm";
import AddressAutoComplete from "./components/addressAutoComplete";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: null,
      forecast: null
    };
  }

  setCurrent = data => {
    this.setState({
      current: data
    });
  };

  setForecast = data => {
    this.setState({
      forecast: data
    });
  };

  render() {
    return (
      <div className="App">
        <div className="page-wrapper">
          <div className="container">
            <div className="header">
              <h1>
                Weather Forecast
                <i className="fa fa-umbrella weather-icon ml-3"></i>
              </h1>
              <p className="lead">
                A full-stack coding demo using OpenWeatherMap and Google Places
                API
              </p>
            </div>

            <hr></hr>
          </div>
          <div className="container">
            <AddressAutoComplete
              setCurrent={this.setCurrent}
              setForecast={this.setForecast}
            />
          </div>
          <div className="container mt-5">
            <div className="row">
              {this.state.current === null ? null : (
                <Weather result={this.state.current} />
              )}
              {this.state.forecast === null ? null : (
                <Forecast result={this.state.forecast} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
