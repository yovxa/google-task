import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './HomePage';
import Result from './ResultPage';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Result" element={<Result />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
