import {useState, useEffect} from 'react';

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
        <div className="col s1">#</div>
        <div className="col s1"></div>
        <div className="col s4">Name</div>
        <div className="col s3">Marker Capitlization</div>
        <div className="col s3">Current Price</div>
      </div>
      {coinsList && coinsList.map(coin => <div key={coin.id}><Coin rank={coin.market_cap_rank} cap={coin.market_cap} name={coin.name} image={coin.image} price={coin.current_price} /></div>)}
    </div>
  );
}

function Coin({name, image, price, rank, cap}) {
  return (
    <div className="row valign-wrapper">
      <div className="col s1">{rank}</div>
      <div className="col s1"><img src={image} width="30px" /></div>
      <div className="col s4">{name}</div>
      <div className="col s3">{cap}</div>
      <div className="col s3">${price}</div>
    </div>
  );
}

export default App;
