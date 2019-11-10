import { createStore, thunk, action } from 'easy-peasy';

import api from '@api';

const nutritionData = {
  data: null,

  getNutririonData: thunk(async (actions, payload) => {
    const response = await api.getNutririonData(payload);
    const nutritionData = response.data;

    // mock this to include shopping list data
    const mockShoppingList = [
      ['Carrots (kg)', 0.5],
      ['Papas (kg)', 1],
      ['Chicken breasts (kg)', 1.5],
      ['Milk (lt)', 6],
      ['Yogurt (items)', 6],
      ['Bread (items)', 1],
      ['Lettuce (grams)', 300],
      ['Cod fillets (kg)', 1.2]
    ];

    nutritionData.shoppingList = mockShoppingList;
    
    actions.setNutritionData(nutritionData);
  }),

  setNutritionData: action((state, nutritionData) => {
    state.data = nutritionData
  }),
}

const profile = {
  data: {
    gender: 'female',
    weight: '60',
    height: '170',
    age: '35',
    preferences: {
      vegan: false,
      veggie: false,
      dietType: 'bulk'
    }
  },
  
  updateProfileData: action((state, payload) => {
    field = payload[0];
    value = payload[1];
    if (field == 'dietType') {
      state.data.preferences.dietType = value;  
    } else {
      state.data[field] = value;
    }
  })
}

const store = createStore({
  nutritionData,
  profile
});


export default store