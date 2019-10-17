import {creatAppContainer} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import HomeActivity from './HomeActivity';
import ProfileActivity from './ProfileActivity';

const RootStack = createStackNavigator(
    {
        //the Routes
        Home: { screen: HomeActivity},
        Profile: { screen: ProfileActivity},
    },
    {
        //Default Root
        initialRoutetName: 'Home',
    }
);

//create app container
const Container = createAppContainer(RootStack);
export default Container;
