import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screen/Home/HomeScreen";
import Login from "../screen/Auth/Login";
import Register from "../screen/Auth/Register";

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login} options={{headerShown: false, cardStyle: {
            backgroundColor: "#1d2c4d",
            }}}/>
        <Stack.Screen name = "Register" component={Register} options={{headerShown: false, cardStyle: {
            backgroundColor: "#1d2c4d",
            }}}/>
            <Stack.Screen name = "HomeScreen" component={HomeScreen} options={{headerShown: false, cardStyle: {
            backgroundColor: "#1d2c4d",
            }}}/>
    </Stack.Navigator>
    )
}

export default AuthNavigator;