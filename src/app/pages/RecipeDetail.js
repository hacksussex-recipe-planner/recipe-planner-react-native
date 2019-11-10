import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Recipe = ({navigation}) => {

  recipeData = navigation.getParam('recipeData');

  return (
    <MainContainer>
      <Text>Recipe name: {recipeData.name}</Text>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const Text = styled.Text``

export default Recipe;
