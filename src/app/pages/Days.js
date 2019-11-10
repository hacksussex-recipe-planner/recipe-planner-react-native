import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';

// import assets from '@assets';
import theme from '@theme';
import api from '@api';

import Day from './days/Day';

const Days = ({navigation}) => {
  // const [nutritionData, setNutritionData] = useState(null)

  const nutritionData = useStoreState(state => state.nutritionData.data);
  const getNutririonData = useStoreActions(actions => actions.nutritionData.getNutririonData);
  
  // TODO send actual data here
  const mockPostData = {   
    gender: 'male',
    weight: 400.33,
    height: 30.33,
    age: 32,
    preferences: {
        vegan: true,
        veggie: false,
        dietType: 'bulk'
    },
    gymDates: [true, false, true, false, false, true, false]
  }

  useEffect(() => {
    getNutririonData(mockPostData)
    // .then((response) => {
    //   setNutritionData(response.data)
    // })
    // .catch((error) => {
    //   console.warn('Request failed!')
    //   console.warn(error)
    // })
  }, [])

  if (!nutritionData) {
    return <TestText>Loading...</TestText>
  }

  return (
    <MainContainer>
      <TestText>Days</TestText>
      {
        nutritionData.days.map((dayData, i) => {
          return (
            <Day key={i} dayData={dayData}/>
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

export default Days;

