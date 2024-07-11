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

export const fetchBanner = (payload) => {
  return {
    type: FETCH_BANNER,
    payload,
  };
};

export const fetchBannerSuccess = (payload) => {
  return {
    type: FETCH_BANNER_SUCCESS,
    payload,
  };
};

export const fetchBannerFailure = (error) => {
  return {
    type: FETCH_BANNER_FAILURE,
    error,
  };
};

//this is for the showcase
export const fetchShowCase = (payload) => {
  return {
    type: FETCH_SHOWCASE,
    payload,
  };
};
export const fetchShowCaseSuccess = (payload) => {
  return {
    type: FETCH_SHOWCASE_SUCCESS,
    payload,
  };
};

export const fetchShowCaseFailure = (error) => {
  return {
    type: FETCH_SHOWCASE_FAILURE,
    error,
  };
};

//this is for the TESTIMONIAL
export const fetchTestimonial = (payload) => {
  console.log("tesgingt");
  return {
    type: FETCH_TESTIMONIAL,
    payload,
  };
};

export const fetchTestimonialSuccess = (payload) => {
  const curColor = ["#FFF2C4", "#FFDCDA", "#E8FFED"];
  const updatedTestimonial = payload?.map((curVal, index) => {
    const colorIndex = index % curColor.length;
    return { ...curVal, color_code: curColor[colorIndex] };
  });

  return {
    type: FETCH_TESTIMONIAL_SUCCESS,
    payload: updatedTestimonial,
  };
};

export const fetchTestimonialFailure = (error) => {
  return {
    type: FETCH_TESTIMONIAL_FAILURE,
    error,
  };
};



//this is for the FAQ data
export const fetchFaq = (payload) => {
  
  return {
    type: FETCH_FAQ,
    payload,
  };
};

export const fetchFaqSuccess = (payload = []) => ({
  type: FETCH_FAQ_SUCCESS,
  payload: payload.map((item, index) => ({
    ...item,
    isActive: index === 0,
  })),
});

export const fetchFaqFailure = (error) => {
  return {
    type: FETCH_FAQ_FAILURE,
    error,
  };
};