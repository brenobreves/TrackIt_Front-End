import styled from 'styled-components';
import Logo from './assets/logo.svg';
import React, { useContext, useState , useEffect} from 'react';
import { AuthContext } from '../providers/Auth';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';

function CadPage(){
    const {user, setUser} = useContext(AuthContext);
    console.log(user);
    const [postin, setPostin] = useState(false);
    const navigate = useNavigate();

    function Cadastrar(event){
        setPostin(true);
        event.preventDefault();
        const postURL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(postURL, user);
        promise.catch((response)=>{
            alert('Erro, por favor verifique se seus dados estão corretos');
            console.log(response);
            setPostin(false);
        });
        promise.then(()=>{
            setPostin(false);
            navigate('/');
        });
    }
    return(
        <SCLoginPage>
            <SCLogo src={Logo}/>
                <SCForm onSubmit={Cadastrar}>
                    <input data-test="email-input" disabled={postin} type='text' placeholder='email' required value={user.email} onChange={ (e) => setUser({...user ,email: e.target.value})}></input>
                    <input data-test="password-input" disabled={postin} type='password' placeholder='senha' required value={user.password} onChange={ (e) => setUser({...user ,password: e.target.value})} ></input>
                    <input data-test="user-name-input" disabled={postin} type='text' placeholder='nome' required value={user.name} onChange={ (e) => setUser({...user ,name: e.target.value})}></input>
                    <input data-test="user-image-input" disabled={postin} type='text' placeholder='foto' required value={user.image} onChange={ (e) => setUser({...user ,image: e.target.value})}></input>
                    <SCEntrarButton postin={postin} data-test="signup-btn" disabled={postin} type='submit'>
                        {postin ? <BeatLoader color='#FFFFFF'/> : 'Cadastrar'}
                    </SCEntrarButton>
                </SCForm> 
            <Link data-test="login-link" to='/'>    
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
    opacity:${(props) => props.postin ? '0.5' : '1'}
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