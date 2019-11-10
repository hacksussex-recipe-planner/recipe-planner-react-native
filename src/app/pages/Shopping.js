import React from 'react';
import styled from 'styled-components';
import { useStoreActions, useStoreState } from 'easy-peasy';


// import assets from '@assets';
import theme from '@theme';
import api from '@api';

const Shopping = () => {
  const nutritionData = useStoreState(state => state.nutritionData.data);

  if (!nutritionData) {
    return (
      <TextNoData>
        Please, visit Recipe first to generate your shopping list
      </TextNoData>
    )
  }

  const shoppingList = nutritionData.ingredients_list
  const ingredients = []

  for (const [key, value] of Object.entries(shoppingList)) {
    ingredients.push([key, value])
  }

  return (
    <MainContainer>
      <Wrapper>
        <Header>
          Shopping list for the next week
        </Header>
        {ingredients.slice(0, 30).map((item, i) => {
          return(
            <ItemRow key={i}>
              <Label>{item[0]}: </Label>
              <Value>{item[1]}</Value>
            </ItemRow>           
          )
        })}
      </Wrapper>
    </MainContainer>
  );
};

const MainContainer = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.mainGrayBackground}
`;

const TextNoData = styled.Text`
  text-align: center;
  margin-top: 30px;
  font-size: ${theme.styles.header};
`;

const Wrapper = styled.View`
  margin-top: 20px;
  padding: ${theme.styles.marginBlocks};
`

const Header = styled.Text`
  text-align: center;
  font-size: ${theme.styles.header};
  color: ${theme.colors.textMain};
  margin-bottom: 20px;
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

export default Shopping;
