import { useEffect, useState } from "react";

function Hello(){
  function byeFun(){
    console.log("bye");
  }
  function hiFun(){
    console.log("hi"); // 리렌더링 -> 이전 이펙트 클린업(hiFun) -> 새로운 이펙트 실행(byeFun)
    return byeFun; // 컴포넌트가 파괴될 때 코드를 실행하고 싶으면 return 함수로 만들어주면 됨 
  }
  useEffect(hiFun, []); // [] - 컴포넌트가 렌더링될 때마다 hiFun() 실행
  return <h3>Hello!</h3>;
}
function App(){
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((bool) => !bool);
  // 자바스크립트 사용시 {} 사용
  return (
    <div>
      <h1>hello</h1>
      {showing ? <Hello /> : ""}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;