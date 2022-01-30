const LOAD_COIN = "LOAD_COIN";

export const coinReducer = (state = {coinDescription: {}}, action) => {
  switch (action.type) {
    case LOAD_COIN:
      return {...state, coinDescription: action.payload};
    default:
      return state;
  }
};

export const loadCoinAction = (payload) => ({type: LOAD_COIN, payload});
