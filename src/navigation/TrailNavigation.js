import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from '../screen/Home/Feed';
import InformationTrail from '../screen/Home/InformationTrail';
import ReviewPage from '../screen/Home/ReviewPage';
import UserPath from '../screen/Home/UserPath';


const TrailStack = createStackNavigator();

export function TrailNavigation(){
    return(
        <TrailStack.Navigator screenOptions = {{headerShown:false}}>
            <TrailStack.Screen 
                name ="Feed"
                component = {Feed}
            />
             <TrailStack.Screen 
                name ="InformationTrail"
                component = {InformationTrail} 
            /> 
             <TrailStack.Screen 
                name ="UserPath"
                component = {UserPath} 
            /> 
             <TrailStack.Screen 
                name ="ReviewPage"
                component = {ReviewPage} 
            /> 

        </TrailStack.Navigator>
    )
}