import { loadCoinAction } from "../store/coinReducer";

export const fetchCoin = (coinName) => {
  return dispatch => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinName}`;
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(loadCoinAction(json)));
  }
}
