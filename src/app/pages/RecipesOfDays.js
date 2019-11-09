import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';
import api from '@api';

import RecipesOfDay from './RecipesOfDay';

const RecipesOfDays = ({navigation}) => {
  // TODO api should be executed here
  // Component should be loading meanwhile
  const nutritionData = api.getNutririonData();

  const daysData = nutritionData.days;

  // console.warn(daysData)

  return (
    <MainContainer>
      <TestText>Days</TestText>
      {
        daysData.map((dayData, i) => {
          return (
            <RecipesOfDay key={i} dayData={dayData}/>
          )
        })
      }
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text``

export default RecipesOfDays;

