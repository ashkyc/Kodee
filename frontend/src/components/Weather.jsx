import React from "react";

var currentdate = new Date().toString();

const Weather = props => {
  return (
    <div className="col-6">
      <h3>Weather in {props.result.name}</h3>
      <h6>{currentdate}</h6>
      <div className="row">
        <div className="col-6">
          <span>Current Temperature: </span>
          <h1>{props.result.main.temp}F</h1>
          <table className="table">
            <tbody>
              <tr>
                <th scope="row">Daily High</th>
                <td>{props.result.main.temp_max} F</td>
              </tr>
              <tr>
                <th scope="row">Daily Low</th>
                <td>{props.result.main.temp_min} F</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-6">
          <img
            src={`http://openweathermap.org/img/wn/${props.result.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
          <p>{props.result.weather[0].description}</p>
        </div>
      </div>
      {/* <div className="row text-center">
        <button className="btn btn-warning">Get 5 day forecast</button>
      </div> */}
    </div>
  );
};

export default Weather;
