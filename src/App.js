// @flow
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Search from './views/search'
import GameDetail from './views/GameDetails'

const MainNavigator = createStackNavigator({
  Home: {screen: Search},
  GameDetail: {screen: GameDetail } 
});

const App = createAppContainer(MainNavigator);

export default App;
