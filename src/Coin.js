export default function Coin({name, image, price, rank, cap}) {
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
