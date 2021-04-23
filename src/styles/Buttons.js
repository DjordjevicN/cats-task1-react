import styled, { css } from 'styled-components'

export const Button = styled.button`
font-size:20px;
background-color:blue;
color:yellow;
border-radius:${props => props.round ? "30px" : '0'};
border:none;
padding:15px 40px;
margin:10px;
cursor:pointer;

${(props) => props.primary && css`
color:white;
background-color:green;
`
    }
${(props) => props.secondary && css`
color:red;
background-color:black;
`
    }
    &:hover{
 color:purple;
 background:none;
 border:1px solid black 
}
`