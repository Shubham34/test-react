import * as Constant from "../constants/Constant";

var api = {
  async requestPOST(url, method, body) {
    var Body = body === null || body === undefined ? {} : body ;
    return await fetch(Constant.baseUrl + url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(Body),
    });
  },
  async requestGET(url, method) {
    return await fetch(Constant.baseUrl + url, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  },
};
export default api;
