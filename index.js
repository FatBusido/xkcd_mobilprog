/**<>
 * @format
 */

import {AppRegistry, SafeAreaView, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import randomComic from './xkcdAPI/.xkcd_Random.js';

const App=()=>(
    <SafeAreaView>
        <StatusBar barStyle="auto"/>;
        <randomComic></randomComic>;
        

    </SafeAreaView>
)





AppRegistry.registerComponent(appName, () => App);
