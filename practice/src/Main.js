// Link - 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom"; // 컴포넌트들의 모음집
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  // 유저가 URL Home(path="/")에 있으면 <Home /> 컴포넌트를 렌더링
  // 유저가 URL Movie(path="/movie")에 있으면 <Detail />  컴포넌트를 렌더링
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
}

export default App;