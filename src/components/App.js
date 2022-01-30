import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../asyncActions/coins";
import Coin from "./Coin";
import TopFourCoins from "./TopFourCoins";

function App() {
  const dispatch = useDispatch();
  const coins = useSelector(state => state.coins.topCoins);

  useEffect(() => {
    dispatch(fetchCoins());
  }, []);

  return (
    <>
    <div className="container">
      <h1>Top 100 crypto coins</h1>
    </div>
    <div className="container">
      <div className="row">
        {coins && coins.filter(coin => coin.market_cap_rank < 5).map(coin => <div key={coin.id}><TopFourCoins id={coin.id} rank={coin.market_cap_rank} name={coin.name} image={coin.image} price={coin.current_price} /></div>)}
      </div>
      <div className="row">
        <div className="col s1">#</div>
        <div className="col s1"></div>
        <div className="col s4">Name</div>
        <div className="col s3">Marker Capitlization</div>
        <div className="col s3">Current Price</div>
      </div>
      {coins && coins.filter(coin => coin.market_cap_rank > 4).map(coin => <div key={coin.id}><Coin id={coin.id} rank={coin.market_cap_rank} cap={coin.market_cap} name={coin.name} image={coin.image} price={coin.current_price} /></div>)}
    </div>
    </>
  );
}

export default App;
