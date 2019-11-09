import React from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

// import assets from '@assets';
import theme from '@theme';

const Recipe = ({recipeData, navigation}) => {
  return (
    <MainContainer>
      <Button 
        onPress={() => navigation.navigate('RecipeDetail', { recipeData })}
        title={recipeData.name}
      />
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TestText = styled.Text``;

const Button = styled.Button``;


export default withNavigation(Recipe);
