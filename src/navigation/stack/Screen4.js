/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,Image,TextInput,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';


const Screen4 = () => {

  const navigation = useNavigation();

  const [name, setName] = useState("Binoy Dey")
  const [age, setAge] = useState('29');
  const [gender, setGender] = useState('male')
  const [country, setCountry] = useState('')
  const [passport, setPassport] = useState('ED73945');
  const [dob, setDob] = useState('ED73945');
  const [email, setEmail] = useState('binoy@gmail.com');
  const [phone, setPhone] = useState('+638 4382 485');


  return (
   <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          
            <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('ScreenTask3')}}>
              <Icons name="arrow-left" color='white' size={24}></Icons>
            </TouchableOpacity>
            <View style={styles.details}>
              <Text style={styles.headerTitle}>Passenger Details</Text>
              <View style={styles.airline}>
                <Text style={styles.routename}> JS- IND</Text>
                <TouchableOpacity>
                 <Icons name="pencil-alt" color="white" size={15}></Icons>
                </TouchableOpacity>
              </View>
            </View>   
            <TouchableOpacity style={styles.notificationButton} onPress={()=>{navigation.navigate('ScreenTask5')}}>
              <Icon name="notifications" size={24} color='white'></Icon>
              <View style={styles.notification}>
                <Text style={styles.notificationText}>1</Text>
              </View>
            </TouchableOpacity>  
        </View>

        {/* Airline Details*/}
        <ScrollView>
        <View style={styles.airlineContainer}>
          <View style={styles.airlineData}>
              <View style={styles.airlineDetails}>
                <Image source={require('../Images/indigo.png')} style={styles.airlineLogo}></Image>
          
                <View style={styles.airlineName}>
                  <Text style={styles.airlineName1}>Indigo Airlines</Text>
                  <Text style={styles.selectedSeat}>Selected seat 348</Text>
                </View>
             </View> 

             <View style={styles.ailineLending}>
              <TouchableOpacity>
                <Icons name="plane-departure" size={18} color='black' style={styles.airlineLogo1}></Icons>
              </TouchableOpacity>
              <View>
                <Text style={styles.route}>America JS</Text>
                <Text style={styles.routeTime}>Mon, 17mar - 23:50</Text>
              </View>
              <TouchableOpacity>
               <Icons name="arrow-right" size={25} color='#e91e63'></Icons>
              </TouchableOpacity> 
              <TouchableOpacity>
               <Icons name="plane-arrival" size={18} color='black' style={styles.airlineLogo1}></Icons>
              </TouchableOpacity>
              <View>
                <Text style={styles.route}>Bangalore IND</Text>
                <Text style={styles.routeTime}>Mon, 18mar - 5:00</Text>
              </View>
             </View>
            </View>


             <View style={styles.seat}>
              <TouchableOpacity style={styles.seatDetails}>
                <Icon name="airline-seat-recline-extra" color='black' size={24}></Icon>
                <Text>1 Seat</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                 <Text style={styles.viewDetails}>View Details</Text>
              </TouchableOpacity>
             </View>

             <View style={styles.passengerConatiner}>
                <View style={styles.details1}>
                  <Text style={styles.passengerdetails}>Passenger details:</Text>
                  <TouchableOpacity style={styles.addPassengerButton}>
                    <Icon name="add" size={20} color="#black" />
                    <Text style={styles.addPassenger}> Add Passenger</Text>
                   
                  </TouchableOpacity>
                </View>
                
                <Text style={styles.inputLabel}>Name</Text>
                <TextInput style={styles.textInput} value={name} onChangeText={setName} placeholder="Enter passenger name"></TextInput>

                <View style={styles.ageContainer}>
                  <View style={styles.rowConatiner}>
                    <Text style={styles.inputLabel}>Age</Text>
                    <TextInput style={styles.textInput} value={age} onChangeText={setAge} placeholder='Age' ></TextInput>
                  </View>

                  <View style={styles.rowConatiner}>
                    <Text style={styles.inputLabel}>Gender</Text>
                    <View style={styles.genderContainer}>
                      <TouchableOpacity
                       style={styles.genderOption}
                       onPress={() => setGender('male')}
                      >
                        <View style={styles.radioOuter}>
                           {gender === 'male' && <View style={styles.radioInner} />}
                        </View>
                        <Text style={styles.genderText}>Male</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                      style={styles.genderOption}
                       onPress={() => setGender('female')}
                      >
                        <View style={styles.radioOuter}>
                          {gender === 'female' && <View style={styles.radioInner}/>}
                        </View>
                        <Text style={styles.genderText}>Female</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <Text style={styles.inputLabel}>Country</Text>
                <TouchableOpacity style={styles.dropdownInput}>
                  <Text style={styles.placeholderText}>Select Countery</Text>
                  <Icon name='keyboard-arrow-down' color='black'></Icon>
                </TouchableOpacity>

                 <Text style={styles.inputLabel}>Passport</Text>
                 <TextInput
                  style={styles.textInput1}
                  value={passport}
                  onChangeText={setPassport}
                  placeholder="Passport number"
                 />


                  <Text style={styles.inputLabel}>Date of birth</Text>
                  <TextInput
                    style={styles.textInput1}
                    value={dob}
                    onChangeText={setDob}
                    placeholder="Date of birth"
                  />
             </View>

             <View style={styles.contactSection}>
              <Text style={styles.contactTitle}>Contact details:</Text>

              <Text style={styles.inputLabel}>E-mail</Text>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Email address"
              />

               <Text style={styles.inputLabel}>Phone Number</Text>
                <TextInput
                  style={styles.textInput}
                  value={phone}
                  onChangeText={setPhone}
                  placeholder="Phone number"
                />
             </View>
             
            <View style={styles.priceHeader}>
              <View style={styles.priceSection}>

                <View style={styles.priceContainer}>
                  <Text style={styles.priceType}>Sleeper,Seater</Text>
                  <Text style={styles.price}> ₹ 5,700</Text>
                </View>

                <TouchableOpacity style={styles.confirmButton}>
                  <Text style={styles.confirmButtonText}>Confirm</Text>
                </TouchableOpacity>
              </View>
             </View>
            </View> 

       </ScrollView> 
      </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#F5F5F5',
   
  },
  container:{
    //marginHorizontal:15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerContainer:{
    backgroundColor: '#D4376F',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 16,
    paddingVertical:18,
    height:80
  },
  backButton: {
    padding: 5,
    marginTop: 7
  },
  headerTitle: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600'
  },
  details:{
    marginLeft:-40
  },
  airline:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  routename:{
    color:'white',
    fontSize:18,
    fontWeight:300
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
    top: 1,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 5,
    backgroundColor: '#03fc4e',
    borderWidth: 1,
    borderColor: 'green',
    marginTop:8,
    marginRight:-4
  },
   notificationText:{
    color:'white',
    alignItems:'center',
    textAlign:'center',
    fontSize:8
  },
  airlineContainer:{
    justifyContent:'space-between',
    backgroundColor:'white',
   // marginHorizontal:20,
     shadowColor: '#000',
    shadowRadius: 8,
    elevation: 6,
    paddingHorizontal:20,
    marginBottom:110
  },
  airlineDetails:{
    flexDirection:'row'
  },
  airlineLogo:{
    height:70,
    width:120
  },
  airlineData:{
    textAlign:'left',
    paddingTop:10,
    borderColor:'#e91e63',
    borderBottomWidth:2,
    borderStyle:'dotted'
  },
  airlineName:{
    left:15
  },
  airlineName1:{
    paddingTop:10,
    fontWeight:'bold',
    fontSize:15
  },
  selectedSeat:{
    fontWeight:300
  },
  ailineLending:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  route:{
    fontSize:15,
    fontWeight:'bold'
  },
  routeTime:{
    fontSize:14,
    fontWeight:'400'
  },
  airlineLogo1:{
    marginTop:9
  },
  seat:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    marginBottom:15

  },
  seatDetails:{
    flexDirection:'row',
    backgroundColor:'#8e9094',
    borderRadius:20,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:7
  },
  viewDetails:{
    fontSize:15,
    fontWeight:'bold',
    textDecorationLine:'underline',
    
  },
  passengerConatiner:{
    justifyContent:'center',
    marginTop:17,
    paddingVertical:5
  },
  passengerdetails:{
    fontSize:20,
    fontWeight:'bold'
  },
  addPassenger:{
    fontSize:16,
    fontWeight:'500'
  },
  addPassengerButton:{
    flexDirection:'row',
    marginTop:4
  },
  details1:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  inputLabel:{
    fontSize: 17,
    
    paddingVertical:10,
    fontWeight:'bold'
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    padding: 10,
    fontWeight:'500',
    fontSize: 16,
  },
   textInput1:{
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    padding: 10,
    fontWeight:'300',
    fontSize: 16,
  },
  ageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowConatiner:{
    width: '48%',
  },
  genderContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:8
  },
  radioOuter:{
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#e91e63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioInner:{
   height: 10,
   width: 10,
   borderRadius: 5,
   backgroundColor: '#e91e63',
  },
  genderText:{
     marginLeft: 8,
    fontSize: 16,
    fontWeight:'500'
  },
  dropdownInput:{
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderText:{
    color: '#999',
    fontSize: 16,
  },
  contactSection:{
    paddingVertical:20
  },
  contactTitle:{
     fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  priceHeader:{
    borderColor:'black',
    borderTopWidth:1,
    borderStyle:'solid',
    left:0,
    right:0,
    backgroundColor:'white',
    marginBottom:10
  },
  priceSection:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical:20,
    paddingHorizontal:20
    
    
    
  },
  priceContainer:{
    flex: 1,
  },
  priceType:{
    fontSize:17,
    fontWeight:'200'
  },
  price:{
     fontSize: 25,
    fontWeight: '900',
    color: '#333',
  },
  confirmButton:{
    backgroundColor: '#26A69A',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  confirmButtonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default Screen4;
