import * as CryptoJS from "crypto-js";
import { secretKey } from "./api";
// Define a secret key for encryption
// const secretKey = "your-secret-key";

// Function to encrypt data
function encryptData(data) {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}

// Function to decrypt data
function decryptData(encryptedData) {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

// Function to set data in session storage
export function setData(key, data) {
  const encryptedData = encryptData(data);
  sessionStorage.setItem(key, encryptedData);
}

// Function to set data in localStorage  
export function setLocalStorageData(key, data) {
  const encryptedData = encryptData(data);
  localStorage.setItem(key, encryptedData);
}
// Function to remove the data from the localStorage 
export function clearLocalStorageItem(key) {
  localStorage.removeItem(key);
}

// Function to get data from session storage
export function getData(key) {
  const encryptedData = sessionStorage.getItem(key);
  if (encryptedData) {
    return decryptData(encryptedData);
  }
  return null;
}

// Function to get data from session storage
export function getLocalStorageData(key) {
  const encryptedData = localStorage.getItem(key);
  if (encryptedData) {
    return decryptData(encryptedData);
  }
  return null;
}

