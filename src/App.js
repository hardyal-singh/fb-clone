
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home  from "./home/home"
import Indexx from "./indexx/indexx";
import Login from "./Login/login";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Login/>}/>
      <Route path="home" element={<Home/>}>
        <Route index element ={<Indexx/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
