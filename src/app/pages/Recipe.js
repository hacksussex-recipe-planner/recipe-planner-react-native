import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Recipe = ({navigation}) => {

  recipeData = navigation.getParam('recipeData');

  return (
    <MainContainer>
      <TestText>Recipe name: {recipeData.name}</TestText>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text``

export default Recipe;
