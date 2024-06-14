import axios from "axios";
import { endpoints } from "../services/endpoints";
export const makeGlobalPayment = async () => {
  try {
    let globalOrderSummary = JSON.parse(
      sessionStorage.getItem("global_Order_Summary"),
    );

    const response = await axios.post(
      `${endpoints?.baseUrl}/invest/startfd`,
      globalOrderSummary,
    );
    console.log(response.data);

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
