
import { useSelector } from "react-redux"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavPanel from "./components/NavPanel";
import Home from "./components/Home";
import "./styles/App.css"

function App() {
  const theme = useSelector(state=>state.theme);
  return (
    <div className={"app-container " +theme}>
      <BrowserRouter>
        <NavPanel/>
        <Routes>
          <Route path="/" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
