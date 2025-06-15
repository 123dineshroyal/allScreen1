//import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { useState } from 'react'; 
import { PaperProvider, TextInput} from 'react-native-paper';
import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Screen3 = () => {

  const navigation = useNavigation();

  const [date, setDate] = useState('26/05/2023');
  const [time, setTime] = useState('08.30');

  return (
    <SafeAreaView style={styles.mainController}>
      <View style={styles.headerController}>

        <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('ScreenTask2')}}>
          <Icons name="arrow-left" color='white' size={24}></Icons>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Flight Details</Text>
        <TouchableOpacity style={styles.notificationButton} onPress={()=>{navigation.navigate('ScreenTask4')}}>
          <Icon name="notifications" size={24} color='white'></Icon>
           <View style={styles.notification}><Text style={styles.notificationText}>1</Text></View>
        </TouchableOpacity>

      </View>

      <View style={styles.mapController}>

        <ImageBackground source={require('../Images/image_copy.png')} style={styles.mapImage}></ImageBackground>


        <View style={styles.routeInfo}>
          <View style={styles.route}>
             <View style={styles.routePath}>
                  <Image source={require('../Images/locationImage.png')} style={styles.routeImage}></Image>

                  <Image source={require('../Images/image.png')} style={styles.loaction}></Image>

                  <Image source={require('../Images/flight.png')} style={styles.flight}></Image>

                  <Image source={require('../Images/locationImage.png')} style={styles.routeImage}></Image>
             </View>
          </View>

          <View style={styles.route}>
            <Text style={styles.routeCode}>JS</Text>

            <Text style={styles.routeCode}>IND</Text>
          </View>
        </View>
        <Text style={styles.availableFlights}>24 Flights Available</Text>

      </View>

      <View style={styles.airlineDetails}>
        <View style={styles.airlineLogoContainer}>
          <Image source={require('../Images/indigo.png')} style={styles.airlineLogo}></Image>
        </View>

        <View style={styles.routeContainer}>
          <View style={styles.routeData}>
            <View style={styles.circle}>
              <Text style={styles.routeCode1}>JS</Text>
            </View>  

            <Image source={require('../Images/routeImg1.png')} style={styles.routeImg1}></Image>

             <Image source={require('../Images/plain.png')} style={styles.plainImg1}></Image>

            <View style={styles.circle}> 
              <Text style={styles.routeCode1}>IND</Text>
            </View>  
          </View>
        <View style={styles.airportContainer}>
            <Text style={styles.airportName}>Madras International{'\n'}Meenambakkam{'\n'} Airport</Text>

            
            <Text style={styles.airportName1}>Kempegowda{'\n'}International Airport</Text>
          
          </View>
        
        </View>
       

          
             <View style={styles.dateTimeContainer}>
                <TextInput
                  label='Date'
                  mode='outlined'
                  value={date}
                  editable={false}
                  outlineColor="#f0f0f0"
                  theme={{ roundness: 7 }} 
                  left={<TextInput.Icon icon ={()=><Icon name="calendar-month" size={23} color="black" />}/>}
                  style={styles.dateTimeLabel}
                  />

                  <TextInput
                  label='Time'
                  mode='outlined'
                  value={time}
                  editable={false}
                  outlineColor="#f0f0f0"
                  theme={{ roundness: 7 }} 
                  left={<TextInput.Icon icon ={()=><Icon name="access-time" size={23} color="black" />}/>}
                   style={styles.dateTimeLabel}
                  />
             </View>
            
         
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>₹</Text>
          <Text style={styles.priceAmount}>5,700</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainController: {
    flex: 1,
    backgroundColor: '#e1e3e1'
  },
  headerController: {
    backgroundColor: '#D4376F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height:80,
  },
  backButton: {
    padding: 5,
    marginTop: 7
  },
  headerTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
    paddingTop:20
    
  },
  notificationButton: {
    padding: 3,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 50,
    marginTop: 7
  },
  notification: {
    position: 'absolute',
    top:-6,
    right: 0.3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#03fc4e',
    borderWidth: 1,
    borderColor: '#03fc4e',
    marginTop:8,
    marginRight:-4,
  },
   notificationText:{
    color:'white',
    alignItems:'center',
    textAlign:'center',
    fontSize:8
  },
  routeImg1:{
    height:40,
    width:210,
    marginTop:-45
  },
  plainImg1:{
    position:'absolute',
    height:50,
    width:50,
    marginBottom:58
  },
  mapController: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D4376F',


  },
  mapImage: {
    width: '100%',
    height: '100%',
    opacity: 0.9,
    justifyContent: 'center',
    position: 'absolute'

  },
  routeData:{
    flexDirection:'row',
   justifyContent:'center',
    alignItems:'center',
    
  },
  routeInfo: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -100,
  },
  flight:{
    height:25,
    width:25,
    position:'absolute',
    marginBottom:42
  },
  routeImage:{
    height:40,
    width:20,
  },
  airportContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginTop:20,
    width:330,
    marginBottom:20
  },
  route: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center'
  },
  loaction: {
    paddingTop:20,
    paddingHorizontal:-10,
    height:45,
    width:190  

  },
  routeCode: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 0,
    padding: 100,
    paddingTop: 0,
    paddingHorizontal: 80,
  },
  routePath: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },

  availableFlights: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.9,
    paddingBottom: 20
  },
  airlineDetails: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginHorizontal: 23,
    marginVertical: 25,
    shadowColor: '#000',
    shadowRadius: 8,
    elevation: 6,
    paddingHorizontal: 5
  },
  airlineLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',

  },
  airlineLogo: {
    width: 150,
    height: 40,
  },
  routeContainer: {
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    alignItems:'center',
    marginTop:60,

  },
 
  circle:{
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.75,
    shadowRadius: 4,
    elevation:10, 
  },
  routeCode1: {
    color: '#CC1B00',
    fontWeight: 'bold',
    fontSize: 18,
  },
  airportName: {
    fontSize: 12,
    color: '#999999',
    fontWeight:'400',
    textAlign:'left'
  },
  airportName1: {
    fontSize: 12,
    color: '#999999',
    fontWeight:'400',
    textAlign:'right'
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 20
  },
  dateTimeLabel: {
    fontSize: 13,
    color: '#999',
    marginBottom: 5,
    marginHorizontal:10,
    borderRadius:10,
   width:'42%',
  backgroundColor:'white',
  height:40
  },
 
  priceContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,

  },
  priceLabel: {
    fontSize: 22,
    color: '#191919',
    fontWeight: '400',
    paddingHorizontal: 20
  },
  priceValue: {
    fontSize: 20,
    color: '#CF2530',
    paddingRight: 10,
    fontWeight:'700'
  },
  priceAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CF2530',
    fontWeight:'700'
  },

});

export default Screen3;
