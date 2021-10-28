import * as types from "../constants/actionTypes";
import { token_api } from "../constants/api";
import axios from "axios";
export function fetchTokens() {
  return async function (dispatch) {
    axios
      .get(token_api)
      .then((response) => {
        let tokenList = Object.keys(response.data.tokens);
        let tokenArray = [];
        tokenList.map((token) => {
          tokenArray.push(response.data.tokens[token]);
        });
        return dispatch({
          type: types.TOKEN,
          tokenList,
          tokenArray,
        });
      })
      .catch(function () {
        alert("something went wrong");
      });
  };
}
