const LOAD_COINS = "LOAD_COINS";

export const topCoinsReducer = (state = {topCoins: []}, action) => {
  switch (action.type) {
    case LOAD_COINS:
      return {...state, topCoins: [...state.topCoins, ...action.payload]};
    default:
      return state;
  }
}

export const loadTopCoinsAction = (payload) => ({type: LOAD_COINS, payload});
