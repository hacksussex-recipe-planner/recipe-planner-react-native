import React from 'react';

import {createAppContainer} from 'react-navigation';

import MainNavigator from './routing/MainNavigator';

const App = createAppContainer(MainNavigator);

export default App;