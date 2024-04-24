import { endpoints } from "./endpoints";

const fetchHeader = { "Content-Type": "application/json" };
// const fetchHeaderFile = { "Content-Type": "application/json", "mimeType": "multipart/form-data" }
const fetchHeaderFile = {}; // { "Content-Type": "multipart/form-data" }
const isCrypto = process.env.REACT_APP_CRYPTO === "on" ? true : false;

export default class Api {
  fetch = async (url, method, body, token = null) => {
    console.log(token, "token");

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    let opt = {
      method: method,
      headers: token ? headers : fetchHeader,
      body: body,
      credentials: "same-origin",
    };
    return await fetch(url, opt).then((response) => response.json());
  };

  fetchFile = (url, method, body) => {
    let opt = {
      method: method,
      headers: fetchHeaderFile,
      body: body,
      credentials: "same-origin",
    };
    console.log("calling from service");

    opt.headers.ekycsession = sessionStorage.tId; //multi session

    return fetch(url, opt).then((response) => response.json());
  };

  buildUrl = (path) => {
    return `${endpoints.baseUrl}${path}`;
  };
}
