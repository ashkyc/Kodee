import React from "react";

var currentdate = new Date().toLocaleString();

const Weather = props => {
  return (
    <div className="col-4">
      <h3>Weather in {props.result.current.name}</h3>
      <h5>{currentdate}</h5>
      <div className="row">
        <div className="col-6">
          <span>Current Temperature: </span>
          <h1>{props.result.current.main.temp}F</h1>
          <table>
            <tbody>
              <tr>
                <td>Daily High</td>
                <td>{props.result.current.main.temp_max}F</td>
              </tr>
              <tr>
                <td>Daily Low</td>
                <td>{props.result.current.main.temp_min}F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <img
            src={`http://openweathermap.org/img/wn/${props.result.current.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <p>{props.result.current.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
