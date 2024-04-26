import { type } from "@testing-library/user-event/dist/type";
import { GET_IFSC, VERIFY_BANK } from "../types/addBank";

export const getIfsc = (payload) => ({
  type: GET_IFSC,
  payload,
});


export const verifyBank=(payload)=>({
  type:VERIFY_BANK,
  payload,
})