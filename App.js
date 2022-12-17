import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image, onPress, Button } from 'react-native'
import { OriginContextProvider,DestinationContextProvider } from './src/context/contexts'
import AppStack from './src/navigation/AppStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return (
      <NavigationContainer>
        <DestinationContextProvider>
          <OriginContextProvider>
            <AppStack/>
          </OriginContextProvider>
        </DestinationContextProvider>
      </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%"
  },
});
