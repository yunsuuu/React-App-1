// useEffect - state가 아무리 변해도 코드가 딱 한번만 실행될 수 있도록 보호해줌(불필요한 코드 재실행을 방지)

import { useState, useEffect } from "react";

function App(){
  const [counter, setCounter] = useState(0); // create react app을 사용하기 때문에 React.useState()로 적지 않아도 됨
  const [keyword, setKeyword] = useState("");
  const changeNum = () => setCounter((current) => current + 1);
  const onChange = (e) => setKeyword(e.target.value); // keyword = e.target.value = input.value
  // console.log("render") // counter(state 값)가 변할 때마다 function App() 모든 코드들이 재실행(리렌더링)
  useEffect(() => {
    console.log("I run only once.");
  }, []); // [] -> 딱 한번 실행
  // useEffect(() => {
  //   console.log("I run when 'keyword' changes", keyword);
  // }, [keyword]); // [keyword] -> keyword가 변화할 때만 코드실행
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]); // keyword, counter 변화할 때만 코드 실행
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h2>{counter}</h2>
      <button onClick={changeNum}>Click me</button>
    </div>
  );
}

export default App;