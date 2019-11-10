import React from 'react';
import { StoreProvider } from 'easy-peasy';

import MainNavigator from './routing/MainNavigator';
import store from '@store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <MainNavigator />
    </StoreProvider> 
  )
};

export default App;