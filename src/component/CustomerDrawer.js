import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Icon } from '@rneui/base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomDrawer = (props, navigation) => {
   return (
    <View style={{flex:1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#0e1626'}}>
        <ImageBackground
            //source={require('../../assets/Icons/background.jpg')}
            style={{padding: 20}}>
                <TouchableOpacity>
                <Image 
                    source={require('../../assets/Icons/pfp.webp')}
                    style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
                />
                </TouchableOpacity>
                <Text style={{color:'#fff', fontSize: 18}}>John Doe</Text>
        </ImageBackground>
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
        <DrawerItemList {...props}/>
    </View>
    </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth:1, borderTopColor: '#ccc'}}>
        <TouchableOpacity style={{paddingVertical: 15,}} onPress={()=>{}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="share-social-outline" size={22}/>
                <Text style={{fontSize: 15,marginLeft: 5}}>Share</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{paddingVertical: 15,}} onPress={()=>{}}>
            <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name="exit-outline" size={22}/>
                <Text style={{fontSize: 15, marginLeft: 5}}>Sign out</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
   )
};


export default CustomDrawer