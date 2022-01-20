import { loadTopCoinsAction } from "../store/topCoinsReducer";

export const fetchCoins = () => {
  return (dispatch) => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
    fetch(url)
      .then(response => response.json())
      .then(response => {
        dispatch(loadTopCoinsAction(response));
    });
  };
};
