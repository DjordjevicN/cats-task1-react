import React from 'react';
import { H1, H2, H3, H4, H5, H6, Paragraph } from './styles/typography'
import { Button } from './styles/Buttons'
import { Wrapper, FlexContainer } from './styles/global'
function App() {
  return (
    <Wrapper darker>
      <FlexContainer row spaceBetween >
        <H1>H1</H1>
        <H2>H2</H2>
        <H3 primary>H3</H3>
        <H4>H4</H4>
        <H5>H5</H5>
        <H6>H6</H6>
        <Paragraph>Paragraph</Paragraph>
        <Paragraph primary>Paragraph Primary</Paragraph>
        <Button primary>Button</Button>
        <Button round>Button</Button>
        <Button round secondary>Button</Button>
      </FlexContainer>
    </Wrapper>
  );
}

export default App;

