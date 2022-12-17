import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screen/Home/HomeScreen'
import DestinationScreen from '../screen/Home/DestinationScreen';


const Home = createStackNavigator();

export function SearchNavigation(){
    return(
        <Home.Navigator>
            <Home.Screen 
                name ="HomeScreen"
                component = {HomeScreen}
                options ={{headerShown:false}}
            />
             <Home.Screen 
                name ="DestinationScreen"
                component = {DestinationScreen}
                options ={{headerShown:false}}
            /> 
        </Home.Navigator>
    )
}