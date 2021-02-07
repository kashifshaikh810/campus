import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Config from './src/components/FirebaseConfig/Config';

AppRegistry.registerComponent(appName, () => App);
