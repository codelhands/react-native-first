/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; // app.js yolunu göstermemiz lazım
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
