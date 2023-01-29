import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Login } from './Login';
import { Registration } from './Registration';
import { ToastContainer } from 'react-toastify';


function App() {
   
    return (
        <div className="App">
            <ToastContainer></ToastContainer>
            <BrowserRouter>
            <Routes>
                <Route path= '/' element={<Home/>}></Route>
                <Route path= '/Login' element={<Login/>}></Route>
                <Route path= '/Registration' element={<Registration/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
