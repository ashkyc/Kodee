import React from "react";
import ForecastResult from "./ForecastResult";

const mapForecastResult = item => (
  <ForecastResult key={item.dt_txt} result={item} />
);

const Forecast = props => {
  return (
    <div className="col-6">
      <h4>5 day Forecast</h4>
      <table className="table">
        <tbody>
          <tr>
            <th scope="col">Datetime</th>
            <th scope="col">Temp</th>
            <th scope="col">High</th>
            <th scope="col">Low</th>
            <th scope="col">Weather</th>
            <th scope="col"></th>
          </tr>
          {props.result.list.map(mapForecastResult)}
        </tbody>
      </table>
    </div>
  );
};

export default Forecast;
