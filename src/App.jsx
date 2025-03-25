
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavPanel from "./components/NavPanel";
import Home from "./components/Home";
import "./styles/App.css"
import Explore from "./components/Explore";

function App() {
  const theme = useSelector(state=>state.theme);
  return (
    <div className={"app-container " +theme}>
      <BrowserRouter>
        <NavPanel/>
        <div className="main-app-content">
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/explore" element={ <Explore /> } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
