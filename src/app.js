
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './containers';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import * as reducers from './stores/reducers';
const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export function start() {
  registerScreens(store, Provider);

  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'com.example.WelcomeScreen',
        label: 'Welcome'
      }
    ]
  });
}
