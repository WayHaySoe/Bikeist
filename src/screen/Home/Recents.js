import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import db from '../../../firebase/root/firebasefunctions';
import {collection, addDoc, getDocs, getDoc} from "firebase/firestore";
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';

const windowHeight = Dimensions.get('window').height;

const Recents = ({navigation}) => {
  const [trail, setTrail] = useState(null);
  useEffect(() => {
    const Fetch_Trail_By_ID = async() => {
      const collectionRef = collection(db, 'TRAILS')
      await getDocs(collectionRef).then(docs => {
          const trailArray = new Array();
          docs.forEach(doc => {
              if (doc.id){
                const trailInfo = {
                  name : doc.data().NAME,
                  location : doc.data().LOCATION,
                  reviews : doc.data().REVIEWS,
                  stars : doc.data().STARS,
                  user_id : doc.data().USER_ID,
                  coordinates : doc.data().COORDINATES,
                  level: doc.data().LEVEL,
                  distance: "9.2 mi",
                  time: "4h 16m",
                  img: require('../../../assets/trail1.jpg'),
                  trailid: doc.id
                }
                trailArray.push(trailInfo)
                //console.log(doc.data())
                // console.log("FETCH INFO: " + trailArray[0])
                // console.log(trailArray[0])
                // console.log("DATA: " + DATA)
                // console.log(DATA)
                // console.log(trailInfo['name'])
                // console.log(trailInfo['location'])
                // console.log(trailInfo['reviews'])
                // console.log(trailInfo['stars'])
                // console.log(trailInfo['user_id'])
                // console.log(trailInfo['locations'])
              }
      })
      
      setTrail(trailArray)
      
  }, [setTrail])
}

    //const Fetch = require("../../../firebase/root/fb_Fetch.js");
    //let firebase_fetch = new Fetch();
    Fetch_Trail_By_ID()
  });


  const renderItem = ({ item }) => (

    <View style={{}}>
        <TouchableOpacity style={{paddingBottom: 65,}} onPress={()=>{navigation.navigate('InformationTrail', {name: item.name, location: item.location, level: item.level, distance: item.distance, time: item.time, stars: item.stars, reviews: item.reviews, img: item.img, trail_id: item.trailid, coordinates: item.coordinates})}}>
            <View style={{width: "100%", height: windowHeight/4.45}}>
                <Image source={item.img} style={{height: "116%", width: "100%", resizeMode: 'stretch', borderRadius: 15}}/>
            </View>
            {/* Name of trail */}
            <View style={{position:'absolute', backgroundColor: 'white', height: '55%', width: '100%', top: "80%", borderBottomLeftRadius: 15, borderBottomRightRadius: 15, shadowColor: '#52006A', shadowOffset: {width: 1, height: 2}, shadowOpacity: 0.2, shadowRadius: 3, elevation: 20}}>
                <TouchableOpacity>
                    <Icon style = {{position: "absolute", right:15, bottom: 80}} name="ios-heart-outline" color="white" size={30}/>
                </TouchableOpacity>
                {/* Location of trail */}
                <Text style={{ color: 'black', paddingTop: 5, paddingLeft: 10, fontSize: 20,}}>{item.name}</Text>
                <Text style={{ paddingLeft: 10, color: 'grey' }}>{item.location}</Text>
                {/* level/stars/rating */}
                <View style={{ paddingLeft: 10, flexDirection: 'row'}}>
                    <View style={{backgroundColor: "#1AA7EC", width: "20%", borderRadius: 5, justifyContent:'center'}}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 13}}>{item.level}</Text>
                    </View>
                    <StarRatingDisplay rating={item.stars} starSize={15} enableHalfStar={true}/>
                    <Text style={{color: "grey"}}>({item.reviews})</Text>
                </View>
                {/* Time and Distance */}
                <View style={{paddingLeft: 10, flexDirection: "row"}}>
                    <Text style={{color: 'grey'}}>Length: {item.distance} • </Text>
                    <Text style={{color: 'grey'}}>Est. {item.time}</Text>
                </View>
                <TouchableOpacity>
                    <Icon style = {{position: "absolute", right:20, bottom: 5}} name="ios-cloud-download-outline" color="grey" size={23}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
  );

    return (
      
      <View style={{backgroundColor: "white", height: "100%", padding: 10}}>
        <View style={styles.searchContainer}>
            <Icon
                name='ios-search-outline'
                color='#000'
                size={14}
            />
        <TextInput
            style={styles.inputStyle}
            autoCorrect={true}
            placeholder="Enter a trail name"/>
        </View>
        <View style={{paddingTop: 10, height: "100%"}}>
        <FlatList
            extraData={trail}
            data={trail}
            renderItem={renderItem}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator = {false}
        />
        </View>
      </View>
    );
  }

  export default Recents;

  const styles = StyleSheet.create({

    view1: {
      backgroundColor: "white",
      width: "95%",
      height: "95%",
      borderRadius: 15,
      paddingBottom: 15
    },
    input: {
        flex: 1,
        height: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15
      },
      searchContainer: {
        backgroundColor: "#f2f2f2",
        flexDirection: 'row',
        padding: 15,
        borderRadius: 15,
      },
      inputStyle: {
        flex: 1,
        paddingLeft: 10
      },
      item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1
      },
  });