import styled from 'styled-components';
import Logo from './assets/logo-mini.svg';
import React, { useContext } from 'react';
import { AuthContext } from '../providers/Auth';
import { Link } from 'react-router-dom';
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import { PercentContext } from '../providers/Percent';
import 'react-circular-progressbar/dist/styles.css';


function Header(){
    const {user, setUser} = useContext(AuthContext);
    const {percent , setPercent} = useContext(PercentContext);
    return(
        <>
            <SCHeader data-test="header">
                <img src={Logo} />
                <SCUserImg data-test="avatar" src={user.image}/>
            </SCHeader> 
            <SCMenuBox data-test="menu">
                <SCMenuLink data-test="habit-link" to='/habitos'>
                    <span>Hábitos</span>
                </SCMenuLink>
                <SCMenuLink2 data-test="today-link" to='/hoje'>
                    <CircularProgressbar backgroundPadding={6} background={true} value={percent} text={`Hoje`} styles={buildStyles({
                        pathColor:'#FFFFFF',
                        backgroundColor:'#52B6FF',
                        textColor:'#FFFFFF',
                        trailColor:'#52B6FF'
                    })}/>
                </SCMenuLink2>
                <SCMenuLink data-test="history-link" to='/historico'>
                    <span>Histórico</span>
                </SCMenuLink>
            </SCMenuBox>
        </>
    )
}

export default Header;
const SCMenuLink2 = styled(Link)`
    width:91px;
    height:91px;
    font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
    text-decoration: none;
    font-size: 17.976px;
    line-height: 22px;
    color:#52B6FF;
    margin-bottom:50px;
`;

const SCMenuLink = styled(Link)`
    font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
    text-decoration: none;
    font-size: 17.976px;
    line-height: 22px;
    color:#52B6FF;
`;

const SCMenuBox = styled.div`
    position:fixed;
    bottom:0;
    width:100%;
    height:70px;
    box-sizing:border-box;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:#FFFFFF;

`;

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