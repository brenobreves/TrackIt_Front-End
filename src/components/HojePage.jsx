import styled from 'styled-components';
import Logo from './assets/logo.svg';
import React, { useContext , useState } from 'react';
import { AuthContext } from '../providers/Auth';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function HojePage(){
    const {user, setUser} = useContext(AuthContext);
    console.log(user);
    const [postin, setPostin] = useState(false);
    const navigate = useNavigate();

    return(
        <>
            Em Desenvolvimento
        </>
    )
}

export default HojePage;

const SCForm = styled.form`
    width:303px;
`

const SCLoginPage = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;
const SCLogo = styled.img`
    margin-top:68px;
    width:180px;  
    margin-bottom:32px;
`;
const SCEntrarButton = styled.button`
    width:303px;
    height:45px;
    background-color: #52B6FF;
    border:0;
    border-radius: 4.63636px;
    color:#FFFFFF;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    margin-bottom:25px;
`;
const SCLinkCadastro = styled.span`
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
`;