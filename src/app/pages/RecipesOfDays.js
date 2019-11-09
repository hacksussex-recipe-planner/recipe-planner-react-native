import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const RecipesOfDays = ({navigation}) => {
  return (
    <MainContainer>
      <Button 
        onPress={() => navigation.navigate('RecipesOfDay')}
        title="Press Me"
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const Button = styled.Button``

const TestText = styled.Text``

export default RecipesOfDays;

