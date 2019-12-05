import React from "react";

const ForecastResult = props => {
  return (
    <tr>
      <td>{props.result.dt_txt}</td>
      <td>{props.result.main.temp}</td>
      <td>{props.result.main.temp_min}</td>
      <td>{props.result.main.temp_max}</td>
      <td>{props.result.weather[0].description}</td>
      <td>
        <img
          src={`http://openweathermap.org/img/wn/${props.result.weather[0].icon}@2x.png`}
          alt="weather-icon"
          style={{ width: "75%" }}
        />
      </td>
    </tr>
  );
};

export default ForecastResult;
