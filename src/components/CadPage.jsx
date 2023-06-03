import styled from 'styled-components';
import Logo from './assets/logo.svg';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Auth';
import { Link } from 'react-router-dom';

function CadPage(){
    const {user, setUser} = useContext(AuthContext);
    console.log(user);
    
    function Cadastrar(event){
        event.preventDefault();
    }
    return(
        <SCLoginPage>
            <SCLogo src={Logo}/>
                <SCForm onSubmit={Cadastrar}>
                    <input type='text' placeholder='email' required onChange={ (e) => setUser({...user ,email: e.target.value})}></input>
                    <input type='password' placeholder='senha' required onChange={ (e) => setUser({...user ,senha: e.target.value})} ></input>
                    <input type='text' placeholder='nome' required onChange={ (e) => setUser({...user ,nome: e.target.value})}></input>
                    <input type='text' placeholder='foto' required onChange={ (e) => setUser({...user ,foto: e.target.value})}></input>
                    <SCEntrarButton type='submit'>Cadastrar</SCEntrarButton>
                </SCForm> 
            <Link to='/'>    
                <SCLinkCadastro>Já tem uma conta? Faça login!</SCLinkCadastro>
            </Link>
       </SCLoginPage>
    )
}

export default CadPage;

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