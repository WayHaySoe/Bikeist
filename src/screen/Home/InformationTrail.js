import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import MapComponent from '../../component/MapComponent';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import { Avatar, Icon } from '@rneui/base'
import { OriginContext, DestinationContext } from '../../context/contexts';
import { FlatList } from 'react-native-gesture-handler';
import db from '../../../firebase/root/firebasefunctions';
import {collection, addDoc, getDocs, getDoc} from "firebase/firestore";

const InformationTrail = ({navigation, route}) => {

    const [reviews, setReviews] = useState(null);
    useEffect(() => {
      const Fetch_Review_By_ID = async() => {
        const collectionRef = collection(db, 'REVIEWS')
        await getDocs(collectionRef).then(docs => {
            const reviewArray = new Array();
            docs.forEach(doc => {
                if (doc.data().TRAIL_ID === route.params.trail_id){
                  const reviewInfo = {
                    name: doc.data().USER_NAME,
                    uid: doc.data().USER_ID,
                    date: doc.data().DATE,
                    stars: doc.data().STARS,
                    description: doc.data().DESCRIPTION
                  }
                  reviewArray.push(reviewInfo)
                }
        })
        
        setReviews(reviewArray)
        
    }, [setReviews])
  }
  
      //const Fetch = require("../../../firebase/root/fb_Fetch.js");
      //let firebase_fetch = new Fetch();
      Fetch_Review_By_ID()
    });




    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown);
}

const onTextLayout = useCallback(e =>{
    setLengthMore(e.nativeEvent.lines.length >=4); //to check the text is more than 4 lines or not
    // console.log(e.nativeEvent);
},[]);

const renderItem = ({ item }) => (

    <View style={{marginTop: 15}}>
        <Text style={{ fontSize: 23, marginLeft: 10 }}>{item.name}</Text>
        <StarRatingDisplay rating={item.stars} enableHalfStar={true} starSize={20}/>
        <Text style={{color:'gray', fontSize: 12, marginLeft: 9}}>{item.date}</Text>
        <Text style={{color: 'black', fontSize: 15, marginLeft: 10}}>
            {item.description}
        </Text>
    </View>
  );

   return (
      <View style={{flex: 1, alignItems:'center', backgroundColor: "white",}}>
        <Image source={route.params.img} style={{height: "40%", wdidth: "100%", blurRadius: 80, resizeMode:'contain'}}/>
        <View style={{position: "absolute", left: 10, top: "20%"}}>
            <Text style={{color: "white", fontWeight: 'bold', fontSize: 23}}>{route.params.name}</Text> 
            <View style={{ flexDirection: 'row'}}>
                <View style={{backgroundColor: "#1AA7EC", width: "30%", borderRadius: 5, justifyContent:'center'}}>
                    <Text style={{alignSelf: 'center', color: 'white', fontSize: 13}}>{route.params.level}</Text>
                </View>
                <StarRatingDisplay rating={route.params.stars} starSize={15} enableHalfStar={true}/>
                <Text style={{color: "white"}}>({route.params.reviews})</Text>
            </View>
            <Text style={{color: "white"}}>{route.params.location}</Text>
            <View style={{marginTop: 15,flexDirection: "row", width: "93.25%", justifyContent:"space-between"}}>

                <TouchableOpacity onPress= {(data,details = null)=>{
                    dispatchDestination({type:"ADD_DESTINATION",payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    navigation.navigate("UserPath",{state:0})
                }}>
                    <Icon type ="material-community"
                                name ="directions-fork"
                                color ="white"
                                size ={23}/>
                    <Text style={{color: "white"}}>Direction</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('UserPath')}}>
                    <Icon type ="material-community"
                                name ="navigation-variant-outline"
                                color ="white"
                                size ={23}/>
                    <Text style={{color: "white"}}>Navigate</Text>
                </TouchableOpacity>

                <View>
                    <Icon type ="material-community"
                                name ="share-variant"
                                color ="white"
                                size ={23}/>
                    <Text style={{color: "white"}}>Share</Text>
                </View>

                <TouchableOpacity onPress={()=>{navigation.navigate('ReviewPage', {trail_id: route.params.trail_id})}}>
                    <Icon type ="fontisto"
                                name ="preview"
                                color ="yellow"
                                size ={23}/>
                    <Text style={{color: "yellow"}}>Review</Text>
                </TouchableOpacity>

                <View>
                    <Icon type ="material-community"
                                name ="download"
                                color ="white"
                                size ={23}/>
                    <Text style={{color: "white"}}>Save</Text>
                </View>
            </View>
        </View>
        <View style={{backgroundColor: 'black', width: "100%", height: "100%"}}>
        <Text
              onTextLayout={onTextLayout}
              numberOfLines={textShown ? undefined : 4}
              style={{ lineHeight: 21, padding: 10, color: "white", size: 15 }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Text>

              {
                  lengthMore ? <Text
                  onPress={toggleNumberOfLines}
                  style={{ right: 0, lineHeight: 21, color: "white", padding: 10}}>{textShown ? 'Read less...' : 'Read more...'}</Text>
                  :null
              }
                      <View
            style={{
                borderBottomColor: 'white',
                borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            />
        <View style={{ marginTop: 5, width: "100%", height: 20, justifyContent:'space-between', flexDirection:'row'}}>
            <Text style={{color:"white"}}>what</Text>
            <Text style={{color:"white"}}>what</Text>
            <Text style={{color:"white"}}>what</Text>
        </View>
        {/* <ScrollView style={{ width: "100%", height: '100%', backgroundColor: 'white'}} showsVerticalScrollIndicator={true}> */}
        <View style={{ padding: 15, backgroundColor: "white", height: "100%"}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 25}}>Reviews</Text>
            <FlatList
                data={reviews}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
        </View>
        
        {/* </ScrollView> */}
        </View>
    </View>
   )
};


export default InformationTrail