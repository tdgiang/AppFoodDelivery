/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/screens/Login';
 
import Authentic from './src/navigation/Authentic';

AppRegistry.registerComponent(appName, () => Login);
