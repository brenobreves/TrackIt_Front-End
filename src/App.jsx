import { createContext, useState } from 'react';
import styled from 'styled-components';
import LoginPage from './components/LoginPage';
import CadPage from './components/CadPage';
import HojePage from './components/HojePage';
import HistPage from './components/HistPage';
import HabitPage from './components/HabitPage';
import React from 'react';
import { AuthContext } from './providers/Auth';
import { PercentContext } from './providers/Percent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
function App() {
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"" ,
    image:"" ,
  })
  const [percent, setPercent] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  return (
      <AuthContext.Provider value={{user, setUser}}>
        <PercentContext.Provider value={{percent, setPercent}}>
          <BrowserRouter>
          {showHeader && <Header/>}
            <Routes>
              <Route path='/' element={<LoginPage setShowHeader={setShowHeader}/>}/>
              <Route path='/cadastro' element={<CadPage setShowHeader={setShowHeader}/>}/>
              <Route path='/hoje' element={<HojePage/>}/>
              <Route path='/historico' element={<HistPage/>}/>
              <Route path='/habitos' element={<HabitPage/>}/>
            </Routes>
          </BrowserRouter>
        </PercentContext.Provider>
      </AuthContext.Provider>
  )
}

export default App

