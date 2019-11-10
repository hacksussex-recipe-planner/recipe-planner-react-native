import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Shopping = () => {
  return (
    <MainContainer>
      <Text>Shopping</Text>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const Text = styled.Text`
  color: ${theme.colors.red};
`

export default Shopping;
