import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import Home from "./routes/Home";

function MainApp() {
  // 사용자가 path="/"(home)에 있으면 <Home /> 컴포넌트를 불러옴
  return (
    <BrowserRouter>
      <Routes>
        <Switch path="/" element={<Home />}></Switch>
        {/* <Route path="/" element={<Home />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default MainApp;