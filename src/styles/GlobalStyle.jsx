import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	input {
		box-sizing: border-box;
		width: 303px;
		height: 45px;
		background: #FFFFFF;
		border: 1px solid #D5D5D5;
		border-radius: 5px;
		font-size: 19.976px;
		line-height: 25px;
		color: #bdbdbd;
		margin-bottom:6px;
		padding: 0 10px;
	}
	*{
		font-family: 'Lexend Deca';
		font-style: normal;
		font-weight: 400;
	}
	input:focus { 
    outline: none !important;
    border-color: #126BA5;
 }
`

export default GlobalStyle