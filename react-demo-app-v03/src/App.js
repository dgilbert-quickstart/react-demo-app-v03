//import {BrowserRouter, Routes, Route} from "react-router-dom"
//-- hashrouter - used with GitHub pages 
import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
        <HashRouter>            
          <Routes>      
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
          </Routes>
      </HashRouter>        
    </>
  );
}

export default App;
