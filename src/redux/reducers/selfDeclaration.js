import { produce } from "immer";
import { GET_PERSONAL_INFO, GET_PERSONAL_INFO_FAILURE, GET_PERSONAL_INFO_SUCCESS, UPDATE_PERSONAL_INFO, UPDATE_PERSONAL_INFO_FAILURE, UPDATE_PERSONAL_INFO_SUCCESS } from "../types/selfDeclaration";

const initialState = {
  getPersonalInfoApiResponse: null,
  getPersonalInfoApiResponseError: null,

  updatePersonalInfoApiResponse: null,
  updatePersonalInfoApiResponseError: null,

};

const reducer = produce((state = initialState, action) => {
  const { type, payload, error } = action;

  switch (type) {

//this is for the get call
    case GET_PERSONAL_INFO:
      // state.responseData = payload?.mobile_no;
      state.error = null;
      return;
    case GET_PERSONAL_INFO_SUCCESS:
     
      state.getPersonalInfoApiResponse = payload;
      return;
    case GET_PERSONAL_INFO_FAILURE:
      state.getPersonalInfoApiResponseError = error;
      return;


//this is for the post call

  case UPDATE_PERSONAL_INFO:
    state.error = null;
    return;
  case UPDATE_PERSONAL_INFO_SUCCESS:
    console.log("in the reducers", payload)
    state.updatePersonalInfoApiResponse = payload;
    return;
  case UPDATE_PERSONAL_INFO_FAILURE:
    state.updatePersonalInfoApiResponseError = error;
    return;
  default:
    return state;
  }
});

export default reducer;
