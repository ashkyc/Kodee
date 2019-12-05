import React from "react";
import "./App.css";
// import AddressForm from "./components/addressForm";
import AddressAutoComplete from "./components/addressAutoComplete";
import Weather from "./components/Weather";
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

  setForcast = data => {
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
                5 day Weather Forecast
                <i className="fa fa-umbrella weather-icon"></i>
              </h1>
              <p className="lead">
                A full-stack practice using OpenWeatherMap and Google Places API
              </p>
            </div>

            <hr></hr>
          </div>
          <div className="container">
            <AddressAutoComplete
              setCurrent={this.setCurrent}
              setForcast={this.setForcast}
            />
          </div>
          <div className="container">
            {this.state.current === null ? null : (
              <Weather result={this.state} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
