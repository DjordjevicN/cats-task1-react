import styled from 'styled-components'

export const H1 = styled.h1`
font-size:36px;
color:${props => props.theme.colors.mainText};
`
export const H2 = styled(H1)`
font-size:24px;
`
export const H3 = styled(H1)`
    font-size:18px;
    `
export const H4 = styled(H1)`
    font-size:15px;
`
export const H5 = styled(H1)`
    font-size:13px;
`
export const H6 = styled(H1)`
    font-size:11px;
`
export const Paragraph = styled.p`
color:${props => props.primary ? 'red' : 'black'};
`