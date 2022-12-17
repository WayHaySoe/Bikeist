import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Favourites from '../screen/Home/Favourites'
import Recents from '../screen/Home/Recents';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function FeedStack() {
    return (
        <Tab.Navigator 
            screenOptions={{
            tabBarLabelStyle: { fontSize: 11 },
            tabBarItemStyle: { width: 100 },
            tabBarStyle: { backgroundColor: 'white' }
            }}>
            <Tab.Screen name="Recents" component={Recents} />
            <Tab.Screen name="Favourites" component={Favourites} />
        </Tab.Navigator>
    );
  }