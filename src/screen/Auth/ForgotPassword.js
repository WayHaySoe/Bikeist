import React from 'react';
import { View, Text } from 'react-native';

const ForgotPassword = () => {
   return (
      <View>
            <View style={styles.mainView}>
    <View style={styles.bottomView}>
        <Text style={styles.Heading}>
            Welcome{'\n'}
            back
        </Text>
        <View style={styles.FormView}>
            <TextInput placeholder={"Username*"} placeholderTextColor={'#fff'} style={styles.TextInput}/>
            <TextInput placeholder={"Email*"} placeholderTextColor={'#fff'} secureTextEntry={true} style={styles.TextInput}/>
            <TextInput placeholder={"Phone number*"} placeholderTextColor={'#fff'} style={styles.TextInput}/>
            <TextInput placeholder={"Password*"} placeholderTextColor={'#fff'} secureTextEntry={true} style={styles.TextInput}/>
            <TextInput placeholder={"Confirm password*"} placeholderTextColor={'#fff'} style={styles.TextInput}/>
            <TouchableOpacity style={styles.Button}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.SignUpButton} onPress={() => navigation.push('Login')}>
            <Text style={styles.SignUpText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
    </View>
      </View>
   )
};


export default ForgotPassword