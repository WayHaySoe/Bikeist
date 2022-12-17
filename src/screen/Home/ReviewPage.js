import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating-widget';
import Filter from 'bad-words';
import { getAuth } from "firebase/auth";

const ReviewPage = ({ navigation, route }) => {
   const [rating, setRating] = useState(0);
   const [description, setDescription] = useState("");
   const Push = require("../../../firebase/root/fb_Push.js");
   let firebase = new Push();
   const auth = getAuth();

   const fs = new FileReader();
   fs.onloadend = fs;
   fs.readAsText('./cmpt370/assets/bad-words.txt');

   const filter = new Filter({
      list: []
   });


   const handleClick = (event) => {
      console.log("SubmitButtonPressed")
      event.preventDefault();
      //if (description != filter.clean(description)){
      //const error = alert('Inappropriate Description')
      //}
      //else{
      console.log("Setting Data")
      const datapassthrough = {
         USER_NAME: auth.currentUser.displayName,
         USER_ID: auth.currentUser.uid,
         TRAIL_ID: route.params.trail_id,
         STARS: rating,
         DESCRIPTION: description,
         DATE: WithoutTime()
      }
      console.log(datapassthrough)
      firebase.Push_Review(datapassthrough);
      //}
   }

   const WithoutTime = () => {
      var date = new Date();
      todaysDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      return todaysDate;
   }

   return (
      <View style={{ alignItems: 'center', justifyContent: 'center', padding: 50 }}>
         <Text style={{ colo: 'black', fontSize: 20 }}>How was the Trail?</Text>
         <StarRating
            rating={rating}
            onChange={setRating}
         />
         <TextInput style={{ width: "80%", height: "40%", borderWidth: 2, borderRadius: 20 }} onChangeText={setDescription} />
         <TouchableOpacity style={{ width: "50%", height: "10%", borderWidth: 2, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }} onPress={handleClick}>
            <Text style={{}}>Submit</Text>
         </TouchableOpacity>

      </View>
   )
};


export default ReviewPage