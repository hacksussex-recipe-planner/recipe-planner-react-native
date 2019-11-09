import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Shopping = () => {
  return (
    <MainContainer>
      <TestText>Shopping</TestText>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text`
  color: ${theme.RED};
`

export default Shopping;
