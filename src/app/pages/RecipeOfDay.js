import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Recipes = ({recipeData}) => {
  return (
    <MainContainer>
      <Button 
        onPress={() => navigation.navigate('Recipe', { recipeData })}
        title={recipeData.name}
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text``

const Button = styled.Button``

export default Recipes;
