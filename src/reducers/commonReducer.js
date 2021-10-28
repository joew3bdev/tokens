import * as types from "../constants/actionTypes";
const initialState = {
  tokenList: false,
  tokenArray: false,
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOKEN: {
      return Object.assign({}, state, {
        tokenList: action.tokenList,
        tokenArray: action.tokenArray,
      });
    }
    default:
      return state;
  }
}
