import { createContext, useState } from 'react';
import styled from 'styled-components';
import LoginPage from './components/LoginPage';
import React from 'react';
import { AuthContext } from './providers/Auth';
import CadPage from './components/CadPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [user , setUser] = useState({
    name:"",
    email:"",
    senha:"" ,
    foto:""
  })

  return (
      <AuthContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/cadastro' element={<CadPage/>}/>
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App

