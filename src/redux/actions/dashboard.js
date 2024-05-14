import { FETCH_BANNER } from "../types/dashboard";


export const fetchBanner = (payload) => ({
  type: FETCH_BANNER,
  payload,
});
