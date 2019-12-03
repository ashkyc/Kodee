import axios from "axios";
import * as serviceHelper from "./serviceHelper";

const entity = "/api/addresses";

const create = payload => {
  const config = {
    method: "POST",
    url: serviceHelper.API_HOST_PREFIX + entity,
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

export { create };
