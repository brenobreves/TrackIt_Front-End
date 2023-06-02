import { useState } from 'react'
import styled from 'styled-components';
import LoginPage from './components/LoginPage';
import React from 'react';
import { useAuth } from './providers/Auth';

function App() {
  const {user, setUser} = useAuth();
  console.log(user);

  return (
    <>
      <LoginPage/>
      
    </>
  )
}

export default App

