import { produce } from "immer";
import { GET_IFSC, VERIFY_BANK } from "../types/addBank";



const initialState = {
    getIFSC: {},
    verifyBank:{}
};

const reducer = produce((state = initialState, action) => {
  const { type, payload } = action;
  

  switch (type) {
    case GET_IFSC:
      // return { ...state, ...payload };
      state.getIfsc = payload;
      return;
      case VERIFY_BANK:
        // return { ...state, ...payload };
        state.verifyBank = payload;
        return;
      
      
    default:
      return state;
  }
});

export default reducer;
