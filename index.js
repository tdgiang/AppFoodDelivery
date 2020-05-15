/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  index from './src/navigation/index';

import tabNavigation from './src/navigation/tabNavigation';

AppRegistry.registerComponent(appName, () => tabNavigation);
