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

const store = createStore({
  nutritionData
});


export default store