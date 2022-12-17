import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FeedStack from '../../navigation/FeedStack';
import Icon from 'react-native-vector-icons/Entypo'

export default function Feed() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
        <View style={{justifyContent:"space-between", flexDirection:'row'}}>
          <View style={{marginLeft: 15, backgroundColor: "#e5e5e5", width: "15%", borderRadius: 5, justifyContent:'center'}}>
            <Text style={{alignSelf: 'center', color: "white", fontWeight: 'bold', }}>Pro</Text>
          </View>
          <TouchableOpacity>
            <Icon name = "dots-three-horizontal" size={20} color="black" style={{marginRight: 15}}/> 
          </TouchableOpacity>
          </View>
          <Text style={{fontSize: 30, color: "black", paddingLeft: 15, paddingTop: 4}}>Plan</Text>
          <FeedStack/>
        </View>
       
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white"
    },
    view: {
      backgroundColor: "white",
      width: "95%",
      height: "95%",
      borderRadius: 15,
      paddingBottom: 15,
      paddingTop: 15
    },
  });