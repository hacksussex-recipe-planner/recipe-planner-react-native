import React from 'react';
import styled from 'styled-components';
import { useStoreState } from 'easy-peasy';


// import assets from '@assets';
import theme from '@theme';

import Recipe from './day/Recipe';

const Day = ({dayData, dayName, dayId}) => {
  
//   console.warn('dayData')
//   console.warn(props)
// 
//   console.warn(props.dayData)
//   console.warn(props.dayData.recipes)

  const profile = useStoreState(state => state.profile.data);

  const recipes = dayData;

  const gymEmoji = profile.gymDates[dayId] ? '💪' : ''

  return (
    <MainContainer>
      <Header>
        Your recipes for {dayName} {gymEmoji}
      </Header>
      {
        recipes.map((recipe, i) => {
          return (<Recipe key={i} recipeData={recipe} />)
        })
      }
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
  margin-left: ${theme.styles.mainPadding};
  margin-right: ${theme.styles.mainPadding};
  margin-top: ${theme.styles.marginBlocks};
  margin-bottom: ${theme.styles.marginBlocks};
  padding: 20px;
  border-width: 1px;
  border-color: ${theme.colors.borderColor};
  border-radius: 5px;
  background-color: ${theme.colors.white}
`;

const Header = styled.Text`
  text-align: center;
  font-size: ${theme.styles.header};
  color: ${theme.colors.textMain};
  margin-bottom: 20px;
`

export default Day;
