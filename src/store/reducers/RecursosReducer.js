import { types } from "../actionTypes";

const initialState = {
  isLoading: false,
  ejecutivo:{},
};

export default (state = initialState, {type,payload}) => {

  switch (type) {
    case types.GET_EJECUTIVO_START:
        return { ...state, isLoading: true }
    case types.GET_EJECUTIVO_SUCCESS:
        return { ...state, isLoading: false , ejecutivo:payload}
    case types.GET_EJECUTIVO_FAILED:
      return { ...state, isLoading: false }

    case types.POST_EJECUTIVO_START:
        return { ...state, isLoading: true }
    case types.POST_EJECUTIVO_SUCCESS:
        return { ...state, isLoading: false }
    case types.POST_EJECUTIVO_FAILED:
      return { ...state, isLoading: false }

    case types.DELETE_EJECUTIVO_START:
        return { ...state, isLoading: true }
    case types.DELETE_EJECUTIVO_SUCCESS:
        return { ...state, isLoading: false }
    case types.DELETE_EJECUTIVO_FAILED:
      return { ...state, isLoading: false }

    case types.UPDATE_EJECUTIVO_START:
        return { ...state, isLoading: true }
    case types.UPDATE_EJECUTIVO_SUCCESS:
        return { ...state, isLoading: false }
    case types.UPDATE_EJECUTIVO_FAILED:
      return { ...state, isLoading: false }


    default:
      return state;
  }
};