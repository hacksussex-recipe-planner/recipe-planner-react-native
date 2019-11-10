import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';
import RNCalendarEvents from 'react-native-calendar-events';

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
    'Sunday, 17',
  ]

  RNCalendarEvents.authorizeEventStore();

  const [calendars, updateCalendars] = useState(null)

  const updateGymDates = useStoreActions(actions => actions.nutritionData.updateGymDates);

  useEffect(() => {
    RNCalendarEvents.findCalendars()
    .then(calendars => {
      // console.warn(calendars)
      updateCalendars(calendars)

      const nextWeek = [
        '2019-11-11',
        '2019-11-12',
        '2019-11-13',
        '2019-11-14',
        '2019-11-15',
        '2019-11-16',
        '2019-11-17'
      ]
  
      // mocking dates,
      // should find the first Monday
      RNCalendarEvents.fetchAllEvents('2019-11-11T00:00:00.000Z', '2019-11-17T23:59:00.000Z')
      .then(events => {

        // "startDate": "2019-11-14T09:30:00.000Z"

        const gymEvents = []

        events.forEach(event => {
          if (event.title == 'Gym') {
            gymEvents.push(event.startDate.substring(0, 10))
          }
        })
        
        gymDates = []
        nextWeek.forEach(day => {
          if (gymEvents.includes(day)) {
            gymDates.push(true)
          } else {
            gymDates.push(false)
          }
        });
// 
//         console.warn("gymDates")
//         console.warn(gymDates)

        payload = profile;
        payload.gymDates = gymDates;

        getNutririonData(payload)

      })
    })
    
  }, [])

  if (!nutritionData) {
    return (
      <LoadingWrapper>
        <ActivityIndicator size={80} color={theme.colors.main}/>
        <LoadingText>Your meal plan</LoadingText>
        <LoadingText>is being prepared!</LoadingText>
      </LoadingWrapper>
    )
  }

  return (
    <MainContainer>
      <Wrapper>
        {
          nutritionData.map((dayData, i) => {
            return (
              <Day key={i} dayData={dayData} dayName={dayNames[i]} dayId={i}/>
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
  background-color: ${theme.colors.mainGrayBackground}
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

