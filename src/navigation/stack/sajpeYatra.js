import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,
} from 'react-native';
import { PaperProvider, TextInput,Image} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const sajpeYatra = () =>{

  const navigation = useNavigation()
  const [date, setDate] = useState('26/05/2023');

  return(
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('paymentInformation_Screen')}}>
                <Icons name="arrow-left" color='white' size={24}></Icons>
            </TouchableOpacity>
        
              <Text style={styles.headerTitle}>sajpe Yatra</Text>
        
            <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications" size={24} color='white'></Icon>
              <View style={styles.notification}>
                <Text style={styles.notificationText}>1</Text>
              </View>
            </TouchableOpacity>
        </View>  
        <ScrollView>
        <View style={styles.cardContainer}>
          <View style={styles.flightContainer}>
             <Text style={styles.flight}>Flight 1</Text>
 
            <View style={styles.inputContainer}>
              <TextInput
                label='From'
                mode='outlined'
                outlineColor="#E6E8E7"
                editable={false}
                theme={{ roundness: 10 }} 
                style={styles.inputBox}
                left={<TextInput.Icon icon="airplane-takeoff" style={styles.airlineLogo}/>}
                value=" "
              /> 
              <View style={styles.airlineDetails}>
                <Text style={styles.cityText}>America JS <Text style={styles.codeText}>JS</Text></Text>
                <Text style={styles.airportText}>Madras International Meenambakkam Airport</Text>
              </View>
            </View>
         

          
 
            <View style={styles.inputContainer}>
              <TextInput
                label='To'
                mode='outlined'
                outlineColor="#E6E8E7"
                editable={false}
                theme={{ roundness: 10 }} 
                style={styles.inputBox}
                left={<TextInput.Icon icon="airplane-landing" style={styles.airlineLogo}/>}
                value=" "
              /> 
              <View style={styles.airlineDetails}>
                <Text style={styles.cityText}>BANGALORE IND  <Text style={styles.codeText}>BLR</Text></Text>
                <Text style={styles.airportText}>Kempegowda International Airport</Text>
              </View>

              <TouchableOpacity style={styles.swapButton}>
                <Icon name='swap-vert' size={25} color="white"></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label='Date'
                    mode='outlined'
                    value={date}
                    editable={false}
                    outlineColor="#f0f0f0"
                    theme={{ roundness: 7 }} 
                   left={<TextInput.Icon icon ={()=><Icon name="calendar-month" size={23} color="black" />}/>}
                   style={styles.TimeLabel}
                                  />
            </View>
          
         </View>



         <View style={styles.flightContainer}>
             <Text style={styles.flight}>Flight 2</Text>
 
            <View style={styles.inputContainer}>
              <TextInput
                label='From'
                mode='outlined'
                outlineColor="#E6E8E7"
                editable={false}
                theme={{ roundness: 10 }} 
                style={styles.inputBox}
                left={<TextInput.Icon icon="airplane-takeoff" style={styles.airlineLogo}/>}
                value=" "
              /> 
              <View style={styles.airlineDetails}>
                <Text style={styles.cityText}>America JS <Text style={styles.codeText}>JS</Text></Text>
                <Text style={styles.airportText}>Madras International Meenambakkam Airport</Text>
              </View>
            </View>
         

          
 
            <View style={styles.inputContainer}>
              <TextInput
                label='To'
                mode='outlined'
                outlineColor="#E6E8E7"
                editable={false}
                theme={{ roundness: 10 }} 
                style={styles.inputBox}
                left={<TextInput.Icon icon="airplane-landing" style={styles.airlineLogo}/>}
                value=" "
              /> 
              <View style={styles.airlineDetails}>
                <Text style={styles.cityText}>BANGALORE IND  <Text style={styles.codeText}>BLR</Text></Text>
                <Text style={styles.airportText}>Kempegowda International Airport</Text>
              </View>
              <TouchableOpacity style={styles.swapButton}>
                <Icon name='swap-vert' size={25} color="white"></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label='Date'
                    mode='outlined'
                    value={date}
                    editable={false}
                    outlineColor="#E6E8E7"
                    theme={{ roundness: 7 }} 
                   left={<TextInput.Icon icon ={()=><Icon name="calendar-month" size={23} color="black" />}/>}
                   style={styles.TimeLabel}
                                  />
            </View>
          
         </View>

         <View style={styles.addCity}>
          <Text style={styles.addCityText}>Add City +</Text>
         </View>


         <View style={styles.classContainer}>
                         <TextInput
                           label='Traveller'
                           mode='outlined'
                           value="1 Adult"
                           editable={false}
                           outlineColor="#E6E8E7"
                           theme={{ roundness: 7 }} 
                          style={styles.classLabel}
                           />
         
                           <TextInput
                           label='Class'
                           mode='outlined'
                           value="Economy"
                           editable={false}
                           outlineColor="#E6E8E7"
                           theme={{ roundness: 7 }} 
                            style={styles.classLabel}
                           />
                      </View>

                 <View style={styles.searchContainer}>
                   <TouchableOpacity style={styles.searchButton}>
                      <Text style={styles.searchText}>SEARCH FLIGHTS</Text>
                   </TouchableOpacity>
                  </View>     
        </View>      
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: '#e1e3e1',
  },
  headerContainer:{
    backgroundColor: '#D4376F',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: 10,
    paddingVertical:20,
    height:80
  },
  backButton:{
    padding: 5,
    marginTop: 7
  },
   headerTitle:{
    fontSize: 28,
    color: 'white',
    fontWeight: '500',
  },
  notificationButton:{
    padding: 3,
    borderColor: 'white',
    borderWidth: 0.5,
    borderRadius: 50,
    marginTop: 7,
  },
  notification:{
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
  cardContainer:{
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop:20,
    marginBottom:20,
    marginLeft:22,
    marginRight:22,
    backgroundColor:'white',
    borderRadius:10
  },
  flightContainer:{
    marginTop:20,
    marginLeft:21,
    marginRight:21,
  },
  flight:{
    fontSize:16,
    fontWeight:600
  },
  inputContainer:{
    position:'relative'
  },
  airlineLogo:{
    height:20,
    width:30,
    marginBottom:30
  },
  inputBox:{
    backgroundColor:'white',
    //marginBottom:10,
    marginTop:10,
    height:66,
  },
  airlineDetails:{
    position: 'absolute',
    left: 50,
    top: 30,
  },
   airlineLogo1:{
    marginTop:8,
    height:17,
    width:20
  },
  cityText: {
    fontWeight: '600',
    fontSize: 16,
  },
  codeText: {
    fontWeight: '400',
    fontSize: 12,
    color: '#555555',
  },
  airportText: {
    fontSize: 12,
    color: '#999999',
    fontWeight:'400'
  },
  TimeLabel:{
    fontSize: 14,
    color: '#999',
    marginBottom: 5,
   width:'50%',
  backgroundColor:'white',
  height:40,
  marginTop:10,
  fontWeight:'500'
  },
  addCity:{
    backgroundColor:'#D4376F',
    width:85,
    height:22,
    marginTop:10,
    borderRadius:5,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'38%'
  },
  addCityText:{
    color:'white',
    alignItems:'center',
    fontSize:12,
    fontWeight:'300'
  },
  classContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:10,
    paddingBottom: 20,
    marginLeft:22,
    marginRight:22
  },
  classLabel:{
    width:'45%',
    height:44,
    fontSize:14,
    fontWeight:'500'
  },
  searchContainer:{
    marginTop:10,
    marginBottom:30,
    marginLeft:22,
    marginRight:22
  },
  searchButton:{
    backgroundColor: '#D4376F',
    paddingVertical: 8,
    borderRadius: 20,
    height:38
  },
  searchText:{
     color: 'white',
    fontWeight: '700',
    fontSize: 16,
    textAlign:'center',
  },
  swapButton:{
    backgroundColor:'#D4376F',
    borderColor:'#04F0FF',
    borderWidth:1,
    borderRadius:20,
    height:35,
    width:35,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:-3,
    right:3,
    zIndex:1
  },
 
})

export default sajpeYatra;