import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";

const Register = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [validationMessage, setValidationMessage] = useState('');

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

    const Push = require("../../../firebase/root/fb_Push.js");
    let firebase = new Push();
    // const validateAndSet = (value, valueToCompare, setValue) =

    const signUp = () => {
        if (password === cpassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: username
                    }).then(() => {
                        console.log("username added")
                    }).catch((error) => {
                        console.log(error)
                    });
                })
                .catch((error) => {
                    console.log(error.message);
                    // ..
                });

        }
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            // ...
        }
    });

    const handleClick = event => {
        event.preventDefault();
        console.log(username, " ", email, " ", phonenumber, " ", password, " ", cpassword);
    }


    return (
        <View style={styles.mainView}>
            <View style={styles.bottomView}>
                <KeyboardAvoidingView>
                    <Text style={styles.Heading}>
                        Sign{'\n'}
                        Up
                    </Text>
                    <ScrollView>
                        <View style={styles.FormView}>
                            <TextInput placeholder={"Username*"} placeholderTextColor={'#fff'} style={styles.TextInput} value={username} onChangeText={setUsername} />
                            <TextInput placeholder={"Email*"} placeholderTextColor={'#fff'} style={styles.TextInput} value={email} onChangeText={setEmail} />
                            <TextInput placeholder={"Password*"} placeholderTextColor={'#fff'} secureTextEntry={true} style={styles.TextInput} value={password} onChangeText={setPassword} />
                            <TextInput placeholder={"Confirm password*"} placeholderTextColor={'#fff'} secureTextEntry={true} style={styles.TextInput} value={cpassword} onChangeText={setCPassword} />
                            <TouchableOpacity style={styles.Button} onPress={signUp}>
                                <Text>Sign Up</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        </View>

    )
};


export default Register

const styles = StyleSheet.create({
    mainView: {
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