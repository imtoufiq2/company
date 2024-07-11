import axios from "axios";
import { endpoints } from "../services/endpoints";
import { clearLocalStorageItem } from "./Crypto";
// export const makeGlobalPayment = async () => {
//   try {
//     let globalOrderSummary = JSON.parse(
//       sessionStorage.getItem("global_Order_Summary"),
//     );

//     const response = await axios.post(
//       `${endpoints?.baseUrl}/investment/startfd`,
//       globalOrderSummary,
//     );
//     console.log(response.data);

//     return response;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };
export const makeGlobalPayment = async () => {
  clearLocalStorageItem("tempPan");
  clearLocalStorageItem("entry_id");
 const panVerificationInfo= sessionStorage.getItem("panVerificationInfo")
 console.log("panVerificationInfo",panVerificationInfo)
  try {
    let globalOrderSummary = JSON.parse(
      sessionStorage.getItem("global_Order_Summary"),
    );

    const response = await axios.post(
      `${endpoints?.baseUrl}/investment/startfd`,
      globalOrderSummary,
    );
    console.log(response.data);
    sessionStorage.setItem(
      "fd_investment_id",
      response?.data?.data?.fd_investment_id,
    );
// debugger
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
