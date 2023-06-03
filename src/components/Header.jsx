import styled from 'styled-components';
import Logo from './assets/logo-mini.svg';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Auth';

function Header(){
    const {user, setUser} = useContext(AuthContext);
    return(
        <SCHeader>
                <img src={Logo} />
                <SCUserImg src={user.image}/>
        </SCHeader> 
    )
}

export default Header;

const SCHeader = styled.div`
    position:fixed;
    top:0;
    width:100%;
    height:70px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color:#126BA5;
    padding-left:18px;
    padding-right:18px;
`;
const SCUserImg = styled.img`
    width:51px;
    height:51px;
    border-radius: 98.5px;
`;