import {useState, useEffect} from "react";
import Coin from "./Coin";
import TopFourCoins from "./TopFourCoins";

function App() {
  const [coinsList, setCoinsList] = useState(null);
  const url1 = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  useEffect(() => {
    fetch(url1).then(response => response.json()).then(response => {
      setCoinsList(response);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {coinsList && coinsList.filter(coin => coin.market_cap_rank < 5).map(coin => <div key={coin.id}><TopFourCoins rank={coin.market_cap_rank} name={coin.name} image={coin.image} price={coin.current_price} /></div>)}
      </div>
      <div className="row">
        <div className="col s1">#</div>
        <div className="col s1"></div>
        <div className="col s4">Name</div>
        <div className="col s3">Marker Capitlization</div>
        <div className="col s3">Current Price</div>
      </div>
      {coinsList && coinsList.filter(coin => coin.market_cap_rank > 4).map(coin => <div key={coin.id}><Coin rank={coin.market_cap_rank} cap={coin.market_cap} name={coin.name} image={coin.image} price={coin.current_price} /></div>)}
    </div>
  );
}

export default App;
