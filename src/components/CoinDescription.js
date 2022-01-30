import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "../asyncActions/coin";

export function CoinDecription() {
  const params = useParams();
  const dispatch = useDispatch();
  const coin = useSelector(state => state.coin.coinDescription);
  useEffect(() => {
    dispatch(fetchCoin(params.coinName));
  }, []);
  if (coin.name) {
    return (
      <>
        <div className="container">
          <h1>{coin.name}</h1>
          <div className="row">
            <div className="col s4">
              <img src={coin.image.large} />
            </div>
            <div className="col s8">
              <ul className="collection">
                <li className="collection-item">Rank: {coin.coingecko_rank}</li>
                <li className="collection-item">Price: ${coin.market_data.current_price.usd}</li>
                <li className="collection-item">Home page: <a href={coin.links.homepage[0]}>{coin.links.homepage[0]}</a></li>
                <li className="collection-item">Algorithm: {coin.hashing_algorithm ? coin.hashing_algorithm : ""}</li>
                <li className="collection-item">Genesis Date: {coin.genesis_date ? coin.genesis_date : ""}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col offset-s2 s8" dangerouslySetInnerHTML={{__html: coin.description.en}}>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="container">
        <div className="preloader-wrapper small active">
          <div className="spinner-layer spinner-green-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }

}
