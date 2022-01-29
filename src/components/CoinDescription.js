import { useParams } from "react-router-dom";

export function CoinDecription() {
  const params = useParams();
  return (
    <>
      <div className="container">
        <h1>{params.coinName}</h1>
      </div>
    </>
  );
}
