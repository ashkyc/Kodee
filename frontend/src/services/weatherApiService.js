import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const apiKey = "c429caae44955e49f659aee8b660f251";

const entity = "https://api.openweathermap.org/data/2.5/forecast";

const getWeather = (lat, lng) => {
  const config = {
    method: "GET",
    url: `${entity}?lat=${lat}&lon=${lng}&mode=json&appid=${apiKey}&units=imperial$cnt=5`,
    withCredentials: true,
    crossdomain: true
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export { getWeather };
