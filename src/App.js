import React from "react";
import Navigation from "./components/navbar";
import Home from "./components/main";
import { BrowserRouter as Router, Route ,Routes } from "react-router-dom";
import Menu from "./components/Menu/menu";
import Book from "./components/book";
import ThankYou from "./components/thankYou";

//import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path='/Delici_rest_frontend' exact element={<Home/>} />
        <Route path='/Delici_rest_frontend/menu' exact element={<Menu/>} />
        <Route path='/Delici_rest_frontend/reservation' exact element={<Book/>} />
        <Route path='/Delici_rest_frontend/thankyou' exact element={<ThankYou/>} />
      </Routes>
    </Router>
  );
}

export default App;






