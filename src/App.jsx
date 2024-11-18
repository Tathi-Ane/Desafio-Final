import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Sobre from "./Components/Sobre/Sobre.jsx";
import Home from "./Components/Home/Home.jsx";
import Novidades from "./Components/Novidades/Novidades.jsx";


export default function App () {
  return (
    <>
   
    <BrowserRouter>
    <Header/>

       
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/novidades" element={<Novidades/>}/>
         <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
     


    </BrowserRouter>
    </>
  );
}