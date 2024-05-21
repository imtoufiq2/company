import { FETCH_BANNER, FETCH_SHOWCASE } from "../types/dashboard";


export const fetchBanner = (payload) => ({
  type: FETCH_BANNER,
  payload,
}); 

export const fetchShowCase = (payload) => ({
  type: FETCH_SHOWCASE,
  payload,
});
