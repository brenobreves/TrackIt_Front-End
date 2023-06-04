import styled from 'styled-components';
import React, { useContext , useEffect, useState } from 'react';
import { AuthContext } from '../providers/Auth';
import axios from 'axios';
import dayjs from 'dayjs';
import CheckImg from './assets/check.svg'
import { PercentContext } from '../providers/Percent';

function HojePage(){
    const {user, setUser} = useContext(AuthContext);
    const {percent, setPercent} = useContext(PercentContext);
    const [habits , setHabits] = useState([]);
    const [contDone , setContDone] = useState(0);
    const dias = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
    let dia = dayjs().day();
    let nowformatado = dayjs().format('DD/MM');
    let diaFormat = dias[dia] + ', ' + nowformatado;
    const token = user.token;
    const config = {
        headers:{
          Authorization: 'Bearer ' + token
        }
    }

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
        const promise = axios.get(URL,config);
        promise.catch((erro) => {
            console.log(erro.response.data);
          });
        promise.then((response)=>{
          setHabits(response.data);
          let cont = 0;
          for(let i=0 ; i < response.data.length ; i++){
            if(response.data[i].done){
                cont = cont + 1;
            }
          }
          setContDone(cont);
          setPercent(parseInt((cont / response.data.length)*100));
        });  
    },[]);

    function setDone(id , done){
        if(!done){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
            const promise = axios.post(URL,{},config);
            promise.catch((erro) => {
                console.log(erro.response.data);
            });
            promise.then(()=>{
                const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
                const promise = axios.get(URL,config);
                promise.catch((erro) => {
                    console.log(erro.response.data);
                });
                promise.then((response)=>{
                    setHabits(response.data);
                    let cont = 0;
                    for(let i=0 ; i < response.data.length ; i++){
                        if(response.data[i].done){
                            cont = cont + 1;
                        }
                    }
                    setContDone(cont);
                    setPercent(parseInt((cont / response.data.length)*100));
                });
            });
        }
        else{
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
            const promise = axios.post(URL,{},config);
            promise.catch((erro) => {
                console.log(erro.response.data);
            });
            promise.then(()=>{
                const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
                const promise = axios.get(URL,config);
                promise.catch((erro) => {
                    console.log(erro.response.data);
                });
                promise.then((response)=>{
                    setHabits(response.data);
                    let cont = 0;
                    for(let i=0 ; i < response.data.length ; i++){
                        if(response.data[i].done){
                            cont = cont + 1;
                        }
                    }
                    setContDone(cont);
                    setPercent(parseInt((cont / response.data.length)*100));
                });
            });
        }

    }

    return(
        <SCHojePage>
            <SCDiaP data-test="today">{diaFormat}</SCDiaP>
            {contDone === 0 ? <SCPorcentP data-test="today-counter" zero={true}>Nenhum hábito concluído ainda</SCPorcentP> : <SCPorcentP data-test="today-counter" zero={false}>{percent}% dos hábitos concluídos</SCPorcentP>}
            {habits.map( (habito) => 
                <SCHabitContainer data-test="today-habit-container" key={habito.id}>
                    <SCHabitInnerContainer>
                        <SCHabitName data-test="today-habit-name">{habito.name}</SCHabitName>
                        <SCHabiSequence data-test="today-habit-sequence">Sequência Atual: <SCSequenceSpan done={habito.done}>{habito.currentSequence} dia{habito.currentSequence > 1 ? "s" :""}</SCSequenceSpan></SCHabiSequence>
                        <SCHabiSequence data-test="today-habit-record">Seu recorde: <SCSequenceSpan done={habito.currentSequence === habito.highestSequence && habito.highestSequence !== 0 }>{habito.highestSequence} dia{habito.highestSequence > 1 ? "s" :""}</SCSequenceSpan></SCHabiSequence>
                    </SCHabitInnerContainer>
                    <SCCheckContainer>
                        <SCCheckButton data-test="today-habit-check-btn" type='button' check={habito.done} onClick={() => setDone(habito.id, habito.done)}><img src={CheckImg}/></SCCheckButton>
                    </SCCheckContainer>

                </SCHabitContainer>
            )}
        </SCHojePage>
    )
}

export default HojePage;

const SCSequenceSpan = styled.span`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px; 
    color:${(props) => props.done ? "#8FC549" : "#666666" }; 
`;

const SCCheckButton = styled.button`
    width:69px;
    height:69px;
    background-color:${(props) => props.check ? '#8FC549' : '#E7E7E7' };  
    border:none;
    border-radius: 5px;
`;

const SCCheckContainer = styled.div`
    width:102px;
    height:100%;
    display:flex;
    justify-content:flex-end;
    align-items:center;  
`;

const SCHabiSequence = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;  
`;

const SCHabitName = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;  
    margin-bottom:7px;
`;

const SCHabitInnerContainer = styled.div`
    width:208px;
    height: 100%;
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
`;

const SCHabitContainer = styled.div`
    width: 340px;
    height: 94px;
    box-sizing: border-box;
    background: #FFFFFF;
    border-radius: 5px;  
    padding: 15px;
    display:flex;
    align-items:flex-start;
    justify-content:flex-start;
`;

const SCPorcentP = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color:${(props) => props.zero ? "#BABABA": "#8FC549" }  
`;

const SCDiaP = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const SCHojePage = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  margin-top:98px;
  margin-left:17px;
  margin-bottom:90px;
  margin-right:31px;

`;
