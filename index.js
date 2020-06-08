/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
 
import app from './src/app';
import index from './src/screens/index';
import ConfirmOrder from './src/screens/ConfirmOrder';
AppRegistry.registerComponent(appName, () => ConfirmOrder);
