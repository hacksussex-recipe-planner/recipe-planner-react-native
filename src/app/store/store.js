import { createStore, thunk, action } from 'easy-peasy';

import api from '@api';

const nutritionData = {
  data: null,

  getNutririonData: thunk(async (actions, payload) => {
    const response = await api.getNutririonData(payload);
    const nutritionData = response.data;
    
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