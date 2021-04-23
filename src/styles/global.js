import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
width:100%;
max-width:1200px;
margin:0 auto;
padding:20px;
background-color:${props => props.darker ? '#b5b5b5' : 'white'};
`
export const FlexContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;

${(props) => props.row && css`
flex-direction:row;
`}
${(props) => props.column && css`
flex-direction:column;
`}
${(props) => props.spaceBetween && css`
justify-content:space-between;
`}
${(props) => props.spaceAround && css`
justify-content:space-around;
`}

`