import styled from 'styled-components';

function HistPage(){
    return(
        <SCHistPage>
            <SCHeadline>Histórico</SCHeadline>
            <SCDesc>Em breve você poderá ver o histórico<br></br>dos seus hábitos aqui!</SCDesc>
        </SCHistPage>
    )
}

export default HistPage;

const SCDesc = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`;
const SCHeadline = styled.p`
    padding-left:2px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`;

const SCHistPage = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  margin-top:98px;  
  gap:17px;
  padding-left:15px;
`;