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
    <div>
      <ol>
        {coinsList && coinsList.map(coin => <Coin key={coin.id} name={coin.name} image={coin.image} price={coin.current_price} />)}
      </ol>
    </div>
  );
}

function Coin({key, name, image, price}) {
  return (
    <li key={key}>
      <img src={image} width="30px" />{name} price: ${price}
    </li>
  );
}

export default App;
