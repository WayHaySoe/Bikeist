import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../component/CustomerDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SearchNavigation } from './SearchNavigation';
import AuthNavigator from './AuthNavigator';
import { TrailNavigation } from './TrailNavigation';
import Submit from '../screen/Home/SubmitNew';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props}/>} screenOptions={{  headerShown: false, headerTransparent:true, drawerLabelStyle: {marginLeft: -25}}} >
          <Drawer.Screen
              name="Home"
              component={SearchNavigation}
              options={
                {
                    drawerIcon: ({color}) => (
                        <Ionicons name="home-outline" size = {22} color = {color}/>
                    )
                }
              }
              />
          <Drawer.Screen
              name="Feed"
              component={TrailNavigation}
              options={
                {
                    drawerIcon: ({color}) => (
                        <Ionicons name="bicycle-outline" size = {22} color = {color}/>
                    )
                }
              }
              />
          <Drawer.Screen
              name="Post"
              component={Submit}
              options={
                {
                    drawerIcon: ({color}) => (
                        <Ionicons name="ios-albums-outline" size = {22} color = {color}/>
                    )
                }
              }
              />
              <Drawer.Screen
              name="Login"
              component={AuthNavigator}
              options={
                {
                    drawerIcon: ({color}) => (
                        <Ionicons name="settings-outline" size = {22} color = {color}/>
                    )
                }
              }
              />
        </Drawer.Navigator>
     )
};


export default AppStack