import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MainScreen } from './Main';
import { EntryDetailScreen } from './EntryDetail';

const AppNavigator = createStackNavigator(
  {
    Home: MainScreen,
    Details: EntryDetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
