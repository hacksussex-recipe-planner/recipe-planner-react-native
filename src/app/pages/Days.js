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
  const profile = useStoreState(state => state.profile.data);
  const getNutririonData = useStoreActions(actions => actions.nutritionData.getNutririonData);
  

  useEffect(() => {
    // TODO try to get if from the calendar
    gymDates = [true, false, true, false, false, true, false];
    
    payload = profile;
    payload.gymDates = gymDates;

    getNutririonData(payload)
  }, [])

  if (!nutritionData) {
    return <Text>Loading...</Text>
  }

  return (
    <MainContainer>
      <Wrapper>
        {
          nutritionData.days.map((dayData, i) => {
            return (
              <Day key={i} dayData={dayData}/>
            )
          })
        }
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.appBackground}
`;

const Wrapper = styled.View`
  padding-top: ${theme.styles.marginBlocks};
  padding-bottom: ${theme.styles.marginBlocks};
`

const Text = styled.Text``

export default Days;

