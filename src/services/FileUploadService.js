import * as constant from "../constants/Constant";
import axios from "axios";

const upload = (file, onUploadProgress) => {
  let formData = new FormData();
  let token = localStorage.getItem("token");
  let supplier = localStorage.getItem("supplier");
  let parsedUser = JSON.parse(supplier);
  formData.append("file", file);
  formData.append("supplier_id", parsedUser.id);
  
  return axios.post(constant.baseUrl+"api/uploadProductFile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token
    },
    onUploadProgress,
  });

};

const uploadImage = (file, onUploadProgress) => {
  let formData = new FormData();
  let token = localStorage.getItem("token");
  let supplier = localStorage.getItem("supplier");
  let parsedUser = JSON.parse(supplier);
  var filesData = [];
  var i = 0;
  for (const iterator of file) {
    formData.append("file_"+i, iterator);
    i++;
  }
  
  formData.append("supplier_id", parsedUser.id);
  
  return axios.post(constant.baseUrl+"api/uploadBulkImages", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token
    },
    onUploadProgress,
  });

};

const uploadImageFromDashboard = (formData) => {
  return axios.post(constant.baseUrl+"api/product/uploadImage", formData,{
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token")
      }
  });
}




export default {
  upload,
  uploadImage,
  uploadImageFromDashboard
};