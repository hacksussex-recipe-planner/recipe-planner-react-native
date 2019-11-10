import React, { useEffect, useState } from 'react';
// import { ActivityIndicator } from 'react-native';
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

  const dayNames = [
    'Monday, 11',
    'Tuesday, 12',
    'Wednesday, 13',
    'Thursday, 14',
    'Friday, 15',
    'Saturday, 16',
    'Sunday, 17'
  ]
  

  useEffect(() => {
    // TODO try to get if from the calendar
    gymDates = [true, false, true, false, false, true, false];
    
    payload = profile;
    payload.gymDates = gymDates;

    getNutririonData(payload)
  }, [])

  if (!nutritionData) {
    return (
      <LoadingWrapper>
        <ActivityIndicator size={80} color={theme.colors.main}/>
        <LoadingText>Nutrimagic will take effect</LoadingText>
        <LoadingText>in a few seconds!</LoadingText>
      </LoadingWrapper>
    )
  }

  return (
    <MainContainer>
      <Wrapper>
        {
          nutritionData.map((dayData, i) => {
            return (
              <Day key={i} dayData={dayData} dayName={dayNames[i]}/>
            )
          })
        }
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.ScrollView`
  flex: 1;
`;

const Wrapper = styled.View`
  padding-top: ${theme.styles.marginBlocks};
  padding-bottom: ${theme.styles.marginBlocks};
  background-color: ${theme.colors.inputBackground}
`

const ActivityIndicator = styled.ActivityIndicator`
  margin-bottom: 20px;
`;

const LoadingWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const LoadingText = styled.Text`
  color: ${theme.colors.main};
  font-size: 20px;
`

const Text = styled.Text``

export default Days;

