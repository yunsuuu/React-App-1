import { useEffect, useState } from "react";

function App2(){
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // coins = coin data가 들어오는 배열
  useEffect(() => { // [] - 아무것도 지켜보지 않음, 1번만 작동
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) => response.json()).then((json) => {
      setCoins(json); // json = coins(data)
      setLoading(false); // coin을 얻었으면 Loading 메시지는 false로 변경
    });
  } , []) // json - API로 가지고 온 모든 data
  return (
    // loading === true이면 Loading... 메시지 아니면 아무것도 보여주지 않음
    <div>
      <h2>Project 1</h2>
      <h3>The Coins! { loading ? "" : `(Total: ${coins.length})` }</h3>
      { loading ? <strong>Loading...</strong> : 
        <select>
          {coins.map((item) => <option>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</option>)}
        </select> 
      }
    </div>
  );
}

export default App2;