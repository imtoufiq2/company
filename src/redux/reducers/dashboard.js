import { produce } from "immer";

import {
  FETCH_BANNER,
  FETCH_BANNER_FAILURE,
  FETCH_BANNER_SUCCESS,
  FETCH_FAQ,
  FETCH_FAQ_FAILURE,
  FETCH_FAQ_SUCCESS,
  FETCH_SHOWCASE,
  FETCH_SHOWCASE_FAILURE,
  FETCH_SHOWCASE_SUCCESS,
  FETCH_TESTIMONIAL,
  FETCH_TESTIMONIAL_FAILURE,
  FETCH_TESTIMONIAL_SUCCESS,
} from "../types/dashboard";

const initialState = {
  bannerData: [],
  showCaseData: null,
  testimonialData: null,
  testimonialError: null,
  faqData: null,
  faqDataError: null,
  error: null,
};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case FETCH_BANNER:
      state.error = null;
      return;
    case FETCH_BANNER_SUCCESS:
      state.bannerData = [...payload];
      return;
    case FETCH_BANNER_FAILURE:
      state.error = error;
      return;

    //showcase data
    case FETCH_SHOWCASE:
      state.error = null;
      return;
    case FETCH_SHOWCASE_SUCCESS:
      state.showCaseData = payload;
      return;
    case FETCH_SHOWCASE_FAILURE:
      state.error = error;
      return;

    //TESTIMONIAL
    case FETCH_TESTIMONIAL:
      state.testimonialError = null;
      return;
      case FETCH_TESTIMONIAL_SUCCESS:
        // Define image paths
        const imagePaths = [
          "/images/tml1.jpg",
          "/images/tml2.jpg",
          "/images/tml3.jpg",
          "/images/tml4.jpg",
          "/images/tml5.jpg"
        ];
      
        // Combine testimonials with image paths
        const updatedTestimonials = payload?.map((testimonial, index) => ({
          ...testimonial,
          user_logo: imagePaths[index] || ""
        })) || [];
      
        // Update state with the combined data
        return {
          ...state,
          testimonialData: updatedTestimonials
        };
      
    case FETCH_TESTIMONIAL_FAILURE:
      state.testimonialError = error;
      return;

    //FETCH_FAQ
    case FETCH_FAQ:
      state.faqDataError = null;
      return;
    case FETCH_FAQ_SUCCESS:
      state.faqData = payload;
      return;
    case FETCH_FAQ_FAILURE:
      state.faqDataError = error;
      return;

    default:
      return state;
  }
});
export default reducer;
