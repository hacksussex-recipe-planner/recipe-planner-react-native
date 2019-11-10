import React, { useState, useEffect } from 'react';
import { StoreProvider, useStoreActions } from 'easy-peasy';

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