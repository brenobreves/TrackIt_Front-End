import { createContext, useState } from 'react';
import styled from 'styled-components';
import LoginPage from './components/LoginPage';
import React from 'react';
import { AuthContext } from './providers/Auth';

function App() {
  const [user , setUser] = useState({
    name:"",
    email:"",
    senha:"" ,
    foto:""
  })

  return (
      <AuthContext.Provider value={{user, setUser}}>
        <LoginPage/>
      </AuthContext.Provider>
  )
}

export default App

