import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

import RecipeOfDay from './RecipeOfDay';

const RecipesOfDay = (props) => {
  
//   console.warn('dayData')
//   console.warn(props)
// 
//   console.warn(props.dayData)
//   console.warn(props.dayData.recipes)

  const recipes = props.dayData.recipes;

  return (
    <MainContainer>
      <TestText>
        Recipes of Day
      </TestText>
      {
        recipes.map((recipe, i) => {
          return (<RecipeOfDay key={i} recipeData={recipe} />)
        })
      }
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text``

export default RecipesOfDay;
