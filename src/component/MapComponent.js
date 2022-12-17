import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { MapStyle } from "../../assets/MapStyle"
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps'; 
import { colors } from '../../assets/styles';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_APIKEY} from "@env";
import * as Location from 'expo-location';

export default class MapComponent extends Component {

    constructor() {
      super();
      this.state = {
        latitude: 0,
        longitude: 0,
        coordroute: []
      };
      this._map = React.createRef(35)
    }
  
    updateState(location) {
      this.setState({
        ...this.state,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    }

    componentDidUpdate(){
      setTimeout(()=>{
        if(this.props.userDestination.latitude !== null){
          this._map.current.fitToCoordinates(
            [this.props.userOrigin, this.props.userDestination],{
              edgePadding:{top:50,right:50,left:50,bottom:50},
              animated:true
            }
          )
        }
      },500)
   }
  
  
    async componentDidMount() {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          return;
        }
        location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Lowest })
        const cali = Location.watchPositionAsync({
          accuracy: Location.Accuracy.Highest,
          distanceInterval: 10,
          timeInterval: 5000,
      }, (loc) => {
        this.setState({
          ...this.state,
          // coordroute:[...this.state.coordroute, {latitude: loc.coords.latitude, longitude: loc.coords.longitude}]
        });
          // console.log("space")
          // console.log("")
          // console.log(this.state.coordroute)
          // console.log("") 
          // console.log("space")
      });
        this.updateState(location);
      } catch (error) {
        console.log(error);
      }
    }

    render(){
    
    return (
        <View>
        <MapView
            ref={this._map}
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            region={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001
            }}
            style={styles.map}
            customMapStyle={MapStyle}
            showsUserLocation = {true}
            followsUserLocation = {true}
            showsMyLocationButton={true}>
                <Polyline coordinates={this.state.coordroute} strokeWidth={3} />
                     { this.props.userOrigin.latitude != null &&  
                        <Marker coordinate = {this.props.userOrigin} >
                            <Image 
                                source ={require('../../assets/Icons/location.png')}
                                style ={styles.markerOrigin2}
                                resizeMode ="cover"
                            />
                        </Marker>
                     }
                     { this.props.userDestination.latitude != null &&   
                        <Marker coordinate = {this.props.userDestination} anchor = {{x:0.5,y:0.5}} >
                            <Image 
                                source ={require('../../assets/Icons/location.png')}
                                style ={styles.markerDestination}
                                resizeMode ="cover"
                            />
                        </Marker>
                     }
                    {this.props.userDestination.latitude !== null &&
                        <MapViewDirections 
                          origin={this.props.userOrigin}
                          destination={this.props.userDestination}
                          apikey={GOOGLE_MAPS_APIKEY}
                          strokeWidth={3}
                          strokeColor="yellow"
                        />
                    } 
        </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
         width:'100%',
         height: '100%'
         },
 
         
           markerWrapOrigin: {
            //  alignItems: "center",
             // justifyContent: "center",
               width:40,
              height:20,
             // marginTop:0
             },
             markerOrigin: {
                width: 16,
                height: 16,
                borderRadius:8
             },
       
             destination: {
                width:20,
               height:20,
               backgroundColor:colors.black,
               alignItems:"center",
               justifyContent:"center"
              },
    
              view1: {
                width:7,
               height:7,
               backgroundColor:colors.white
              },
              markerDestination: {
               width: 16,
               height: 16,
               
              },
              
              markerOrigin2: {
                width: 20,
                height:20,
                borderRadius:10
               },
    
        car:{
            paddingTop:0,
            width: 40,
            height: 20,
           },
    
           view2:{
            position:"absolute",
            top:10,
            right:12,
            backgroundColor:colors.white,
            height:40,
            width:180,
            borderRadius:20,
            justifyContent:"center",
            alignItems:"center",
            marginTop:2, 
            zIndex: 8
            
          },    
     
    view3:{ flexDirection:"row",
    alignItems:"center",
    //marginRight:15,
    //backgroundColor:"white",
    //paddingHorizontal:2,
    paddingVertical:2,
    //borderRadius:20
    },
    
    view4:{
        position:"absolute",
        top:50,
        left:12,
        backgroundColor:colors.white,
        height:40,
        width:140,
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginTop:2, 
        zIndex: 8
        
      }, 
    
      location: {
        width: 20,
        height: 20,
        borderRadius:9,
        backgroundColor:colors.black,
        alignItems:"center",
        justifyContent:"center"
        
        }, 
        
    view9:{width:6,
      height:6,
      borderRadius:4,
      backgroundColor:"white"
    }     
 })