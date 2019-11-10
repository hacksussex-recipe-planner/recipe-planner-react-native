import React from 'react';
import styled from 'styled-components';

// import assets from '@assets';
import theme from '@theme';

const Recipe = ({navigation}) => {

  recipe = navigation.getParam('recipeData');

  const ingredients = []

  for (const [key, value] of Object.entries(recipe.ingredient[0])) {
    ingredients.push([key, value])
  }

  let recipeText = ''

  for (const [key, value] of Object.entries(recipe.prep_instructions)) {
    recipeText += `${value}\n\n`  
  }

  const maximum = 400
  const minimum = 300
  var randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

  return (
    <MainContainer>
      <Wrapper>
        <Header>{recipe['name of recipe']}</Header>
        <PictureWrapper>
          <Picture
            source={{uri: recipe.picture}}
          />
        </PictureWrapper>
        <SubHeader>Macros:</SubHeader>
          <ItemRow>
            <Label>kilocalories: </Label>
            <Value>{recipe.calories}</Value>
          </ItemRow>

          <ItemRow>
            <Label>proteins: </Label>
            <Value>{recipe.proteins}</Value>
          </ItemRow>

          <ItemRow>
            <Label>carbohydrates: </Label>
            <Value>{recipe.carbohydrates}</Value>
          </ItemRow>

          <ItemRow>
            <Label>fat: </Label>
            <Value>{recipe.fat}</Value>
          </ItemRow>
        <SubHeader>Ingredients:</SubHeader>
          {ingredients.map((ingredient, i) => {
            return(
              <ItemRow key={i}>
                <Label>{ingredient[0]}: </Label>
                <Value>{ingredient[1]}</Value>
              </ItemRow>
            )  
          })}
        <SubHeader>Recipe:</SubHeader>
        <RecipeText>
          {recipeText}
        </RecipeText>
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.ScrollView`
  flex: 1;
`;

const Wrapper = styled.View`
  padding: ${theme.styles.marginBlocks};
`;

const Header = styled.Text`
  text-align: center;
  font-size: ${theme.styles.header};
  color: ${theme.colors.textMain};
  margin-bottom: 20px;
`;

const SubHeader = styled.Text`
  text-align: center;
  font-size: ${theme.styles.subHeader};
  color: ${theme.colors.textMain};
  margin-bottom: 14px;
  margin-top: 18px;
  align-items: flex-start;
  text-align: left;
`;

const PictureWrapper = styled.View`  
  align-items: center;
  margin-bottom: 16px;
`;

const Picture = styled.Image`
  height: 220px;
  width: 340px;
  border-radius: 6px;
`;

const ItemRow = styled.View`
  padding-left: 12px;
  margin-bottom: 5px;
  flex-direction: row;
`

const Label = styled.Text`
  font-size: ${theme.styles.fontSize};
`;

const Value = styled.Text`
  font-size: ${theme.styles.fontSize};
  background-color: ${theme.colors.valueHighlight};
  font-family: "monospace";
  padding-left: 4px;
  padding-right: 4px;
`;

const RecipeText = styled.Text`
  font-size: ${theme.styles.fontSize};
`

export default Recipe;
