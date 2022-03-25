// state를 변화시킬 때 컴포넌트가 재실행(모든 코드가 재실행) -> UI 관점으로 보면, 새로운 데이터가 들어올 때마다 자동으로 새로고침 되는 장점이 있지만 일부 코드는 반복적으로 재실행 되면 안 되는 경우가 있음, 이를 해결하기 위해 useEffect를 사용하여 코드를 언제 실행할지 선택권을 가짐
// useEffect - state가 아무리 변해도 코드가 딱 한번만 실행될 수 있도록 보호해줌(불필요한 코드 재실행을 방지)
// useEffect의 첫번째 argument - 특정 시점에만 실행시키고 싶은 코드, 두번째 argument - react.js가 지켜보는 것(특정변화가 감지되는 부분)
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
  //   console.log("I run when 'keyword' changes");
  // }, [keyword]); // [keyword] -> keyword 변화할 때만 코드 실행
    // useEffect(() => {
  //   console.log("I run when 'counter' changes");
  // }, [counter]); // [counter] -> counter 변화할 때만 코드 실행
  useEffect(() => {
    console.log("I run when 'keyword & counter' changes");
  }, [keyword, counter]); // keyword, counter 둘 중 하나가 변화할 때 코드 실행
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here"></input>
      <h2>{counter}</h2>
      <button onClick={changeNum}>Click me</button>
    </div>
  );
}

export default App;