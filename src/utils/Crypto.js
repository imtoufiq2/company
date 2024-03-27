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

// Function to get data from session storage
export function getData(key) {
  const encryptedData = sessionStorage.getItem(key);
  if (encryptedData) {
    return decryptData(encryptedData);
  }
  return null;
}

// Example usage
// const data = {
//   investor_id: 58,
//   is_profile_skipped: 1,
//   access_token:
//     "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1OCwiZXhwIjoxNzExNTA5MjkxfQ.abe1CvUrLfJZ5wua1VTHbqtZgxYpwP4eSc1EiUMbgVI",
//   refresh_token:
//     "eyJhbGciOiJIUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo1OCwiZXhwIjoxNzExNTExNjkxfQ.3YAAfObIg47SblPyRPflxHD6YwqPXhdKw5bck49zzog",
// };

// // Store data
// setData("userData", data);

// // Retrieve data
// const retrievedData = getData("userData");
// console.log(retrievedData);
