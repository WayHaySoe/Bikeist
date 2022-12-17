import React,{useState,useContext,useEffect,useRef,useMemo,useCallback} from 'react'
import { StyleSheet, Image,View,Text,Dimensions,TouchableOpacity, PermissionsAndroid} from 'react-native'
import { Avatar, Icon } from '@rneui/base'
import MapComponent from '../../component/MapComponent'
import { colors, parameters } from '../../../assets/styles'
import { OriginContext, DestinationContext } from '../../context/contexts';
import { MapStyle } from "../../../assets/MapStyle"
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps'; 
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env";
import * as Location from 'expo-location';

const UserPath = ({navigation, route}) => {
  const [navigate, setNavigate] = useState(false)
    const [location, setLocation] = useState({})
    const mapRef = useRef(null);
    const [coordinate, setCoordinate] = useState(null)
    const coordinateArray = new Array();
    if(coordinate == null){
    for(let i = 0; i < route.params.coordinates.length; i++){
      
      const latlong = {
        latitude: route.params.coordinates[i].latitude,
        longitude: route.params.coordinates[i].longitude
      }
      coordinateArray.push(latlong)
      }
    setCoordinate(coordinateArray)
    }

    useEffect(()=> {
      (async()=>{
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status == 'granted'){
          console.log('Permission successful!')
        }
        else{
          console.log("Permission not granted")
        }

        const loc = await Location.getCurrentPositionAsync( {accuracy: Location.Accuracy.Lowest} );
        console.log(loc.coords.latitude)
        setLocation([loc.coords.latitude, loc.coords.longitude])

      })();
    }, [])
   return (
      <View>
        <View style ={styles.view1}> 
          <Icon 
            type ="material-community"
            name ="arrow-left"
            color ={colors.grey1}
            size ={32}
            onPress ={()=>navigation.goBack()}/>
        </View>
        <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width:"100%", height:"100%"}}
            initialRegion={{
              latitude: route.params.coordinates[0].latitude,
              longitude: route.params.coordinates[0].longitude
            }}
            customMapStyle={MapStyle}
            showsUserLocation = {true}
            followsUserLocation = {true}
            showsMyLocationButton={true}
            onLayout={()=>{
              mapRef.current.fitToCoordinates([{latitude: route.params.coordinates[0].latitude, longitude: route.params.coordinates[0].longitude}, {latitude: route.params.coordinates[route.params.coordinates.length-1].latitude, longitude: route.params.coordinates[route.params.coordinates.length-1].longitude}],{
                edgePadding:{top:50,right:50,left:50,bottom:50},
                animated:true
              })
            }}
            >
            <Polyline coordinates={coordinate} strokeWidth={5} strokeColor="yellow"></Polyline>
            {navigate == false &&
                        <MapViewDirections 
                          origin={{latitude: location[0], longitude: location[1]}}
                          destination={{latitude: route.params.coordinates[0].latitude, longitude: route.params.coordinates[0].longitude}}
                          apikey={GOOGLE_MAPS_APIKEY}
                          strokeWidth={3}
                          strokeColor="red"
                        />
            }
            
            </MapView>
      </View>
   )
};


export default UserPath

const styles = StyleSheet.create({
  view1:{
    position:"absolute",
    top:25,
    left:12,
    backgroundColor:colors.white,
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginTop:2, 
    zIndex: 10
    
  },
  
  view3:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:2,   
    marginBottom:10,
    backgroundColor: colors.white,
    height:30,
    zIndex: 10
  },
  
  view2:{
      backgroundColor:colors.white,
      zIndex:4,
      paddingBottom:10,
        
      },
})