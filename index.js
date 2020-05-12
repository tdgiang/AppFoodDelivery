/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  index from './src/navigation/index';
AppRegistry.registerComponent(appName, () => index);
