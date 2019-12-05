import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const entity = "https://localhost:50001/api/addresses/";

const create = payload => {
  const config = {
    method: "POST",
    url: entity,
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "content-type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

const getForecast = payload => {
  const config = {
    method: "POST",
    url: entity + "weather",
    data: payload,
    withCredentials: true,
    crossdomain: true,
    headers: {
      "content-type": "application/json"
    }
  };
  return axios(config)
    .then(serviceHelper.onGlobalSuccess)
    .catch(serviceHelper.onGlobalError);
};

export { create, getForecast };
