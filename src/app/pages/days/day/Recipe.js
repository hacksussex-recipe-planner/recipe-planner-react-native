import React from 'react';
import styled from 'styled-components';
import { withNavigation } from 'react-navigation';

// import assets from '@assets';
import theme from '@theme';

const Recipe = ({recipeData, navigation}) => {
  return (
    <MainContainer>
      <TouchableWrapper 
        onPress={() => navigation.navigate('RecipeDetail', { recipeData })}
      >
        <Picture
          source={{uri: 'http://lorempixel.com/100/100/food/'}}
        >
        </Picture>
        <Text>
          {recipeData.name}
        </Text>
      </TouchableWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.View`
  flex: 1;
`;

const TouchableWrapper = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  padding: 10px;
  /*border: 1px solid ${theme.colors.main};*/
  border-radius: 3px;
  justify-content: flex-start;
  border-style: dotted;
  align-items: center;
  margin-bottom: 8px;
  margin-top: 8px;
  background-color: ${theme.colors.buttonColor}
`

const Picture = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 18px;
  margin-right: 16px; 
`;

const Text = styled.Text``;


export default withNavigation(Recipe);
