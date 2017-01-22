import WelcomeScreen from './WelcomeScreen';
import { Navigation } from 'react-native-navigation';

export function registerScreens(store, Provider) {
  Navigation.registerComponent('com.example.WelcomeScreen', () => WelcomeScreen, store, Provider);
}
