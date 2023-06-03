import { createContext, useState } from 'react';
import styled from 'styled-components';
import LoginPage from './components/LoginPage';
import CadPage from './components/CadPage';
import HojePage from './components/HojePage';
import HistPage from './components/HistPage';
import HabitPage from './components/HabitPage';
import React from 'react';
import { AuthContext } from './providers/Auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
function App() {
  axios.defaults.headers.common['Authorization'] = '9maaDDkKFQ1saSPY3udlpWmT';
  const [user , setUser] = useState({
    name:"",
    email:"",
    password:"" ,
    image:""
  })
  const [showHeader, setShowHeader] = useState(false);

  return (
      <AuthContext.Provider value={{user, setUser}}>
        <BrowserRouter>
        {showHeader && <Header/>}
          <Routes>
            <Route path='/' element={<LoginPage setShowHeader={setShowHeader}/>}/>
            <Route path='/cadastro' element={<CadPage/>}/>
            <Route path='/hoje' element={<HojePage setShowHeader={setShowHeader}/>}/>
            <Route path='/historico' element={<HistPage/>}/>
            <Route path='/habitos' element={<HabitPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App

