import { useContext, useEffect , useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../providers/Auth';
import axios from 'axios';
import { BeatLoader } from 'react-spinners';
import TrashImg from './assets/dump.svg'

function HabitPage(){

  const {user,setUser} = useContext(AuthContext); 
  const [habits , setHabits] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [postin, setPostin] = useState(false);
  const [newHabit, setNewHabit] = useState({name:"" , days:[]});
  const token = user.token;
  const config = {
    headers:{
      Authorization: 'Bearer ' + token
    }
  }
    
  useEffect( () => {
    setPostin(true);
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const promise = axios.get(URL, config);
    promise.catch((erro) => {
      console.log(erro.response.data);
      setPostin(false);
    });
    promise.then((response)=>{
      setHabits(response.data);
      setPostin(false);
    });
  },[]);

  function addHabit(){
    setShowForm(!showForm);
  }
  
  function addDay(p){
    if(newHabit.days.includes(p)){
      const index = newHabit.days.indexOf(p);
      const newDays = [...newHabit.days];
      const aux = newDays.splice(index,1);
      setNewHabit({...newHabit , days: newDays});
      return;
    }
    else{
      const newDays = [...newHabit.days];
      newDays.push(p);
      setNewHabit({...newHabit , days: newDays});
      return;
    }
  }
  function cancelSubmit(){
    setShowForm(false);
  }
  function postHabit(event){
    setPostin(true);
    event.preventDefault();
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';
    const promise = axios.post(URL,newHabit,config);
    promise.catch((erro) => {
      console.log(erro.response.data);
      setPostin(false);
      alert("Ocorreu um erro, por favor verifique os dados e tente novamente");
    })
    promise.then((resp) => {
      const arrAux = [resp.data ,...habits];
      setHabits(arrAux);
      setPostin(false);
      setNewHabit({name:'' , days:[]});
      setShowForm(false);
    })

  }
  function deleteHabit(p, index){
    const confirmed = confirm("Você gostaria de remover esse hábito?");
    if(!confirmed){
      return;
    }
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${p}`;
    const promise = axios.delete(URL,config);
    promise.catch((erro) => {
      console.log(erro.response.data);
    })
    promise.then(()=>{
      const ArrAux = [...habits];
      const aux = ArrAux.splice(index,1);
      setHabits(ArrAux);
    })
  }

    return(
        <SCHabitPage>
            <SCHeadlineBox>
                <SCHeadline>Meus Hábitos</SCHeadline>
                <SCAddHabitButton data-test="habit-create-btn" onClick={addHabit}>+</SCAddHabitButton>
            </SCHeadlineBox>
            {showForm && 
              <SCAddForm data-test="habit-create-container" onSubmit={postHabit}>
                <input data-test="habit-name-input" disabled={postin} type='text' placeholder='nome do hábito' required value={newHabit.name} onChange={ (e) => setNewHabit({...newHabit ,name: e.target.value})}></input>
                <SCButContainer>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(0)} onClick={()=>addDay(0)}>D</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(1)} onClick={()=>addDay(1)}>S</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(2)} onClick={()=>addDay(2)}>T</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(3)} onClick={()=>addDay(3)}>Q</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(4)} onClick={()=>addDay(4)}>Q</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(5)} onClick={()=>addDay(5)}>S</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled={postin} selected={newHabit.days.includes(6)} onClick={()=>addDay(6)}>S</SCFormButton>
                </SCButContainer>
                <SCSubmitContainer>
                <SCCancelButton data-test="habit-create-cancel-btn" type='button' disabled={postin} onClick={cancelSubmit}>Cancelar</SCCancelButton>
                <SCSaveButton data-test="habit-create-save-btn" type='submit' disabled={postin} postin={postin}>{postin ? <BeatLoader color='#FFFFFF'/> : 'Salvar'}</SCSaveButton>
                </SCSubmitContainer>
              </SCAddForm>
            }
            {habits.map( (habito , index) => 
              <SCHabitContainer data-test="habit-container" key={habito.id}>
              <SCInnerContainer>
                <SCHabitName data-test="habit-name">{habito.name}</SCHabitName>
                <SCButContainer>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(0)}>D</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(1)}>S</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(2)}>T</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(3)}>Q</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(4)}>Q</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(5)}>S</SCFormButton>
                  <SCFormButton data-test="habit-day" type='button' disabled selected={habito.days.includes(6)}>S</SCFormButton>
                </SCButContainer>
              </SCInnerContainer>
              <SCDeleteHabitContainer>
                <img data-test="habit-delete-btn" src={TrashImg} onClick={() => deleteHabit(habito.id, index)}/>
              </SCDeleteHabitContainer>
            </SCHabitContainer> 
             )} 
            

            {habits.length === 0 && !postin && <SCEmptyP>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</SCEmptyP>}
        </SCHabitPage>
    )
}

export default HabitPage;

const SCDeleteHabitContainer = styled.div`
  width:92px;
  height:100%;
  margin-top:11px;
  margin-right:10px;
  display:flex;
  justify-content:flex-end;
  align-items:flex-start;
  img{
    width:13px;
    height:15px;
  }

`;

const SCHabitName = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;

const SCInnerContainer = styled.div`
  width:248px;
  height:63px;
  box-sizing:border-box;
  display:flex;
  align-items:bottom;
  justify-content:flex-start;
  flex-direction:column;
  padding-left:14px;
`;

const SCHabitContainer = styled.div`
  width:340px;
  height:91px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:flex-start;
`;

const SCCancelButton = styled.button`
  width: 69px;
  height: 20px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #52B6FF;
  background-color:#FFFFFF;
  border:none;
  margin-right:23px;
`;

const SCSaveButton = styled.button`
  width: 84px;
  height: 35px;
  background-color:#52B6FF;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  border:none;
  border-radius: 4.63636px;
  opacity:${(props) => props.postin ? '0.5':'1'};
`;

const SCSubmitContainer = styled.div`
  width:100%;
  height:35px;
  box-sizing:border-box;
  display:flex;
  align-items:center;
  justify-content:flex-end;
`;

const SCFormButton = styled.button`
  width:30px;
  height:30px;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  box-sizing: border-box;
  background-color:${(props) => props.selected ? "#CFCFCF": "#FFFFFF" };
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color:${(props) => props.selected ? "#FFFFFF":"#DBDBDB"};
`;

const SCButContainer = styled.div`
  display:flex;
  margin-top:2px;
  align-items:bottom;
  justify-content:flex-start;
  gap:4px;
  margin-bottom:29px;
`;

const SCAddForm = styled.form`
  display:flex;
  width: 340px;
  height: 180px;
  box-sizing: border-box;
  padding: 15px;
  flex-direction:column;
  align-items:bottom;
  justify-content:flex-start;
`;

const SCEmptyP = styled.p`
  margin-top:8px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;

const SCAddHabitButton = styled.button`
  width: 40px;
  height: 35px;  
  background: #52B6FF;
  border-radius: 4.63636px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  color: #FFFFFF;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  text-align:center;
  font-size: 27px;
  line-height:16px;
  padding-bottom:5px;
`;

const SCHeadline = styled.p`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 22.976px;
  line-height: 29px;  
  color: #126BA5;  
`;

const SCHeadlineBox = styled.div`
  width:100%;
  height:35px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:20px;  
`;

const SCHabitPage = styled.div`
  width:100%;
  height:100%;
  margin-top: 92px;
  margin-bottom: 100px;
  padding-left:17px;
  padding-right:18px;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  overflow:hidden;
`;