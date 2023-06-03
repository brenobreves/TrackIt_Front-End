import styled from 'styled-components';

function HabitPage(){

    function addHabit(){
        alert("addHabit");
    }

    return(
        <SCHabitPage>
            <SCHeadlineBox>
                <SCHeadline>Meus Hábitos</SCHeadline>
                <SCAddHabitButton onClick={addHabit}>+</SCAddHabitButton>
            </SCHeadlineBox>
            
        </SCHabitPage>
    )
}

export default HabitPage;

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
`;