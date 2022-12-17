import React, {useState} from 'react';
import { SafeAreaView,StyleSheet, View, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Filter from 'bad-words';
import * as ImagePicker from 'expo-image-picker';
import jsondata from '../../../firebase/root/local_userdata.json';
import { SelectList } from 'react-native-dropdown-select-list'
import { GeoPoint } from 'firebase/firestore';
//import storage from '@react-native-firebase/storage';

const Submit = ({navigation}) => {
   const Push = require("../../../firebase/root/fb_Push.js");
   let firebase = new Push();
   //console.log("JSON Data: ", jsondata)
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [level, setLevel] = useState([]);
   const [img, setImg] = useState(null);
 
   
   const HandlePhotoButtonPress = () => {
      Alert.alert(
         "Import Photo",
         "How would you like to import your photo?",
         [
           {
             text: "Open Camera App",
             onPress: () => HandleTakePhoto()
           },
           {
             text: "Open Photo Library",
             onPress: () => HandleChoosePhoto,
             
           },
           { text: "Nevermind", 
             onPress: () => console.log("Exiting"),
             style: "cancel" }
         ]
       );
   }

   const HandleTakePhoto = async () => {
      const options = {
         presentationStyle: 'popover',
         mediaType : 'photo',
         cameraType : 'back'

      }
      let permission = await ImagePicker.requestCameraPermissionsAsync();
      const result = await ImagePicker.launchCameraAsync(options, response => {
         if (response.uri) {
            this.setImg(response);
         }
         console.log(response);
      });

      //uploadImageToStorage(response.uri, jsondata['uid'].concat((Math.random() * 1000).toString()));      
}

   const HandleChoosePhoto = async () => {
      const options = {
         noData: true
      }
      let permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
      let result = await ImagePicker.launchImageLibraryAsync(options, response => {
      if (response.uri) {
         this.setImg(response);
      }
   })
   //uploadImageToStorage(response.uri, jsondata['uid'].concat((Math.random() * 1000).toString()));
}

   const uploadImageToStorage = (path, imageName) => {
      let reference = storage().ref(imageName);         // 2
      let task = reference.putFile(path);               // 3

      task.then(() => {                                 // 4
         console.log('Image uploaded to the bucket!');
      }).catch((e) => console.log('uploading image error => ', e));
      const imageReferance = reference;
   }

   const fs = new FileReader();
   fs.onloadend = fs;
   fs.readAsText('./cmpt370/assets/bad-words.txt');

   
   const filter = new Filter({
      list: []
   });

   const handleClick = (event) =>{
      console.log("SubmitButtonPressed")
      event.preventDefault();
      if (name !=  filter.clean(name)){
         console.log('profanity found')
         //styles.promptText.color == 'red'
         const error = alert("Inappropriate Name,\n Try a Different One")
      }
      if (description != filter.clean(description)){
         const error = alert('Inappropriate Description')
      }
      else{
         console.log("Setting Data")
         setName("Martis Peak Trail")
         const datapassthrough = {
            USER_ID : '4qhhADG4c4fzsJxgWmNmK6W7SsO2',
            NAME: name,
            DESCRIPTION: description,
            STARS: 0,
            UNCALCULATEDSTARS: 0,
            REVIEWS: 0,
            COORDINATES : [
               new GeoPoint(52.12220393569114, -106.66853315470875),
               new GeoPoint(52.122218713513256, -106.66775813525129),
               new GeoPoint(52.122212802385, -106.66704328811197),
               new GeoPoint(52.12224383580112, -106.66648007518586),
               new GeoPoint(52.12229641243106, -106.66487535564411),
               new GeoPoint(52.12245305677295, -106.66413884645984),
           ],
           LOCATION: 'Tahoe National Forest',
           LEVEL: level
         }
         console.log(datapassthrough)
         firebase.Push_Trail(datapassthrough);
      }
   }


   const Level = [
      {key:'1', value:'Easy'},
      {key:'2', value:'Medium'},
      {key:'3', value:'Hard'},
  ]

  console.log(fs)

   return (
      <View style={styles.container}>
         
      
            <Text style = {styles.Heading}>
               Submit a new trail
            </Text>
            <View style={styles.FormView}>


            {/* name */}
            <TextInput placeholder={"Trail Name"} placeholderTextColor={'#fff'} style={styles.TextInput} value={name} onChangeText={setName}/>

            
            <TouchableOpacity style={styles.Button} onPress = {HandlePhotoButtonPress}>
               <Text> Add Image</Text>               
            </TouchableOpacity> 

            <TextInput placeholder={'Add Description'} placeholderTextColor={'#fff'} style={styles.TextInputLarge} value={description} onChangeText={setDescription}/>
            <View style={{padding: 20}}>
            <SelectList 
               setSelected={(val) => setLevel(val)} 
               data={Level} 
               save="value"
            />
            </View>
            <TouchableOpacity style={styles.ButtonFinal} onPress={handleClick}>
               <Text>Submit</Text>
            </TouchableOpacity>
            </View>
      </View>
   )
};

export default Submit


const styles = StyleSheet.create({
   
   container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1d2c4d',
   },

   Button: {
      width: '80%',
      height: '15%',
      backgroundColor: '#fff',
      borderRadius: 10 ,
      //marginTop: 10 ,
      //marginBottom: 10,
      display: 'flex' ,
      justifyContent: 'center' ,
      alignSelf: 'center',
      alignItems: 'center' ,
   },
   ButtonFinal: {
      width: '50%',
      height: '15%',
      
      backgroundColor: '#fff',
      borderRadius: 10 ,
      //marginTop: 40 ,
      //marginBottom: 80,
      //display: 'flex' ,
      justifyContent: 'center' ,
      alignSelf: 'center',
      alignItems: 'center' ,
   },
   FormView: {
      width: '100%',
      height: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'center',
      marginTop: 5,
      position: 'center'
     },
     Heading: {
      color: '#fff',
      fontSize: 40,
      alignSelf: 'center',
      fontWeight: 'bold', 
      marginTop: 10,
      marginBottom: 50
     },
     TextInput: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#fff',
      height: 52,
      borderRadius: 10,
      //marginTop: 70,
      //marginBottom: 20,
      alignSelf: 'center',
      color: '#fff'
     },
     TextInputLarge: {
      width: '90%',
      borderWidth: 1,
      borderColor: '#fff',
      height: 150,
      borderRadius: 10,
      //marginTop: 20,
      //marginBottom: 20,
      alignSelf: 'center',
      color: '#fff'
     }

});