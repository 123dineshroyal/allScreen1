
import React from 'react';
//import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer, useNavigation } from '@react-navigation/native';


const Screen2 = () => {

  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('ScreenTask1')}}>
        <Icons name='arrow-left' color='white' size={24}></Icons>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Payment Details</Text>
        <TouchableOpacity style={styles.notificationButton} onPress={()=>{navigation.navigate('ScreenTask3')}}>
          <Icon name='notifications' size={24} color='white'></Icon>
         <View style={styles.notification}><Text style={styles.notificationText}>1</Text></View>
        </TouchableOpacity>
      </View>

      {/*Flight Data*/}
      
       <View style={styles.payment}>
        <Image style={styles.shadow} source={require('../Images/borderTop.png')}></Image>   
      
      <View  style={styles.ticketContainer}>
        
        <View style={styles.airlineHeader}>
          <Image style={styles.airlineName} source={require('../Images/indigo.png')}></Image>
          <Text style={styles.flightDate}>26/May/2023</Text>
        </View>

        <View style={styles.flightDetails}>
          <View style={styles.locationTime}>
            <Text style={styles.time}>08:30</Text>
            <Text style={styles.location}>America JS</Text>
          </View>

          <View style={styles.flightDuration}>
            
              <Icons name="plane" size={17} color="#e91e63"/>
              <Text style={styles.duration}>1 Hour</Text>
            
          </View>

          <View style={styles.locationTime}>
            <Text style={styles.time1}>09:30</Text>
            <Text style={styles.location}>BANGLORE IND</Text>
          </View>
        </View>


        <View style={styles.flightInfoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Economy</Text>
            <Text style={styles.infoValue}>Class</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>4</Text>
            <Text style={styles.infoValue}>Gate</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>3</Text>
            <Text style={styles.infoValue}>Terminal</Text>
          </View>

          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>DI017</Text>
            <Text style={styles.infoValue}>Flight</Text>
          </View>

        </View>

        <View style={styles.passengerDetails}>
          <View style={styles.passengerInfo}>
            <View style={styles.passengerId}>
              <Image source={require('../Images/person.png')}  style={styles.passengerImage}
></Image>
            </View>
            <View>
              <Text style={styles.passengerName}>Binoy Dey</Text>
              <Text style={styles.passengerAge}>22 Years,Male</Text>
            </View>  
          </View>
        

        <View style={styles.seatContainer}>
          <Icons name='car' size={20} color='#261c4f'></Icons>
          <Text style={styles.seatNumber}>34 B</Text>
        </View>
       </View> 


       {/* QR Code*/}
       <View style={styles.qrCodeContainer}>
        <Image source={require('../Images/qrCode.png')}  style={styles.qrCode}
></Image>
       </View>
      </View>
      </View>
      <View style={styles.circle1}/>
      <View style={styles.circle2}/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e3e1',
  },
  header: {
    backgroundColor: '#D4376F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    height:80,
  },
  backButton:{
    padding:5,
    marginTop:7
  },
  headerTitle:{
    fontSize:20,
    color:'white',
    fontWeight:'600',
    marginLeft:-100
  },
  notificationButton:{
    padding:3,
    borderColor:'white',
    borderWidth:0.5,
    borderRadius:50,
    marginTop:7

  },
   notification:{
    position: 'absolute',
    top: -4,
    right: 0.5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#03fc4e',
    borderWidth: 1,
    borderColor: '#03fc4e',
    marginTop:8,
    marginRight:-4
  },
  notificationText:{
    color:'white',
    alignItems:'center',
    textAlign:'center',
    fontSize:8
  },
  shadow:{
    height:15,
    width:350,
    backgroundColor:'#C0CDE7',
    borderRadius:10,
    marginTop:40,
    marginLeft:30
  },
  ticketContainer:{
    backgroundColor:'white',
    borderRadius:11,
    marginHorizontal:60,
    paddingHorizontal:5,
    marginVertical:-13,
    shadowColor: '#000',
    shadowRadius: 8,
    elevation: 5,
    borderTopColor:'#C0CDE7',
    borderTopWidth:8,
    //borderTopRightRadius:5
    
    
  },
  airlineHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:16,
  },
  airlineName:{
    width:110,
    height:50,
  },
  flightDate:{
    fontSize: 14,
    color: '#e91e63',
    fontWeight: '800',
    marginTop:40
  },
  flightDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    marginBottom:10,
  },
 payment:{
  flexDirection:'column',
  justifyContent:'center',
  textAlign:'center'
 },
  time:{
    fontSize: 18,
    fontWeight: '700',
    color: '#e91e63',
    textAlign:'left'
  },
  time1:{
    fontSize: 18,
    fontWeight: '700',
    color: '#e91e63',
    textAlign:'right'
  },
  location:{
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    fontWeight:'800'
  },
  flightDuration:{
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 8,
  },
  durationLine:{
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  circle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#e91e63',
  },
  line:{
    flex: 1,
    height: 1,
    backgroundColor: '#e91e63',
    marginHorizontal: 4,
  },
  durationInfo:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    gap: 4,
  },
  duration:{
    fontSize: 12,
    color: '#666',
    marginTop:4
  },
  flightInfoContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
  },
  infoItem:{
    alignItems: 'center',
  },
  infoLabel:{
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  infoValue:{
    fontSize: 14,
    fontWeight: '600',
    color: '#e91e63'
  },
  
passengerDetails:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 16,
},
passengerInfo:{
  flexDirection: 'row',
  alignItems: 'center',

},
passengerId:{
  width: 50,
  height: 50,
  borderRadius: 40,
  marginRight: 12,
  overflow: 'hidden',

},
topShadow:{
  
},
passengerImage:{
 width: '100%',
 height: '100%',

},
passengerName:{
  fontSize: 16,
  fontWeight: '600',
  color: '#e91e63',

},
passengerAge:{
  fontSize: 14,
  color: '#666',
},
seatContainer:{
   flexDirection: 'row',
    alignItems: 'center',
},
seatNumber:{
  fontSize: 16,
  fontWeight: '600',
  color: '#333',
  marginLeft: 4,

},
qrCodeContainer:{
  alignItems: 'center',
  justifyContent: 'center',
  padding: 16,
  paddingTop:-5
  //borderTopWidth: 2,
  //borderTopColor: '#f0f0f01',
  //borderStyle:'dotted'
},
qrCode:{
  width: 250,
  height: 250,

},
 circle1:{
    width:30,
    height:30,
    borderRadius:15,
    position:'absolute',
    left:50,
    backgroundColor:'#e1e3e1',
    bottom:335
   },
   circle2:{
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:10,
    position:'absolute',
    right:50,
    bottom:335, 
    backgroundColor:'#e1e3e1'
   }
});

export default Screen2;
