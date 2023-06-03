import styled from 'styled-components';
import Logo from './assets/logo.svg';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../providers/Auth';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';

function CadPage(){
    const {user, setUser} = useContext(AuthContext);
    console.log(user);
    const [postin, setPostin] = useState(false);
    const navigate = useNavigate();

    function Cadastrar(event){
        event.preventDefault();
        setPostin(true);
        const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(postURL, user);
        promise.catch((response)=>{
            alert('Erro, por favor verifique se seus dados estão corretos');
            console.log(response);
            setPostin(false);
        });
        promise.then(()=>{
            navigate('/');
        });
    }
    return(
        <SCLoginPage>
            <SCLogo src={Logo}/>
                <SCForm onSubmit={Cadastrar}>
                    <input disabled={postin} type='text' placeholder='email' required onChange={ (e) => setUser({...user ,email: e.target.value})}></input>
                    <input disabled={postin} type='password' placeholder='senha' required onChange={ (e) => setUser({...user ,password: e.target.value})} ></input>
                    <input disabled={postin} type='text' placeholder='nome' required onChange={ (e) => setUser({...user ,name: e.target.value})}></input>
                    <input disabled={postin} type='text' placeholder='foto' required onChange={ (e) => setUser({...user ,image: e.target.value})}></input>
                    <SCEntrarButton disabled={postin} type='submit'>Cadastrar</SCEntrarButton>
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