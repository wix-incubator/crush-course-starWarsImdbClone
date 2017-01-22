
import WelcomeScreen from './WelcomeScreen';

import { Navigation } from 'react-native-navigation';

export function start() {
  Navigation.registerComponent('com.example.WelcomeScreen', () => WelcomeScreen);
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'com.example.WelcomeScreen'
      }
    ]
  });
}
