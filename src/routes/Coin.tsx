import { useParams } from "react-router-dom";

function Coin() {
  const { coin_id } = useParams();
  return <h1>Coin: {coin_id}</h1>;
}

export default Coin;
