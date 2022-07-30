import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {  Route, Routes } from "react-router-dom";
import Buscador from './pages/Buscador';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
     

     <Routes>
        <Route path="/" element={<Buscador />} />
        <Route path="/buscador" element={<Buscador />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
  );
}

export default App;
