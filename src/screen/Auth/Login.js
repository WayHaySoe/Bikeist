import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import jsondata from '../../../firebase/root/local_userdata.json';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebaseConfig = {
        apiKey: "AIzaSyB8UlMrvwPONlwq-qjs0-RyHQ2QKdYpGlo",
        authDomain: "project-a9c2b.firebaseapp.com",
        projectId: "project-a9c2b",
        storageBucket: "project-a9c2b.appspot.com",
        messagingSenderId: "1026438619687",
        appId: "1:1026438619687:web:dfef22766b36fa9def2402",
        measurementId: "G-0377N22HM3"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const OnSubmitPressed = () => {

        console.log("Email: " + email + ", Password: " + password)
        if (password !== "" && email !== "") {
            console.log("Calling Auth")
            //signOut(auth);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log("Signed " + userCredential.user.displayName + " In Successfully")
                    navigation.goBack();
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }

    return (
        <View style={styles.mainView}>
            <View style={styles.bottomView}>
                <Text style={styles.Heading}>
                    Welcome{'\n'}
                    back
                </Text>
                <View style={styles.FormView}>
                    <TextInput placeholder={"Email address*"} placeholderTextColor={'#fff'} style={styles.TextInput} onChangeText={setEmail} />
                    <TextInput placeholder={"Password*"} placeholderTextColor={'#fff'} secureTextEntry={true} style={styles.TextInput} onChangeText={setPassword} />
                    <TouchableOpacity style={styles.Button} onPress={OnSubmitPressed}>
                        <Text>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.SignUpButton} onPress={() => { navigation.navigate('Register') }}>
                    <Text style={styles.SignUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};


export default Login

const styles = StyleSheet.create({
    mainView: {
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    bottomView: {
        width: '100%',
        height: '100%',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    topView: {
        width: '100%',
        height: '20%',
    },
    Heading: {
        color: '#fff',
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 60
    },
    FormView: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: 20
    },

    TextInput: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#fff',
        height: 52,
        borderRadius: 10,
        paddingLeft: 5,
        marginTop: 20,
        color: '#fff'
    },
    Button: {
        width: '90%',
        color: '#fff',
        height: 52,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.80,
    },
    SignUpButton: {
        width: '90%',
        color: '#fff',
        height: 52,
        borderRadius: 10,
        marginTop: 20,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        BordorRadius: 5,
        marginLeft: 20
    }
    ,
    SignUpText: {
        color: '#fff'
    }

});