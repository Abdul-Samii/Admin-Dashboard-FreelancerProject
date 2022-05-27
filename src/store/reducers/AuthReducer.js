import { types } from "../actionTypes";

const initialState = {
  isLoading: false,
  user:{},
};

export default (state = initialState, {type,payload}) => {
  switch (type) {
    case types.LOGIN_START:
      return { ...state, isLoading: true }
  case types.LOGIN_SUCCESS:
      // console.log(payload)
      return { ...state, isLoading: false , user:payload}
  case types.LOGIN_FAILED:
      return { ...state, isLoading: false }
    default:
      return state;
  }
};