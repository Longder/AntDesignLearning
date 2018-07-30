/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HelloWorldApp from "./HelloWorld/HelloWorldApp";
import FlexDemo from "./Layout/FlexDemo";

// AppRegistry.registerComponent(appName, () => App);
//Hello World
// AppRegistry.registerComponent(appName, () => HelloWorldApp);
//Flex Layout
AppRegistry.registerComponent(appName, () => FlexDemo);
