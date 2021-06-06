import React from "react";
import * as constant from "../Constants/Constant";
import AsyncStorage from "@react-native-community/async-storage";

async function Request(URL, payload, method) {
  console.log(payload, "payload");
  console.log(URL, "URL");
  console.log(method, "method");
  var url = constant.BaseUrl + URL;
  fetch(url, {
    method: method,
    body: JSON.stringify(payload),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "data Login");
      return data;
    })
    .catch((error) => {
      console.log("Post Error :", JSON.stringify(error));
    })
    .done();
}