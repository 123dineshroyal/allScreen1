import React from 'react';
import {StyleSheet, Text, View,ScrollView, Image, TouchableOpacity, SafeAreaView,ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
//import {Images} from '../Images';

const flightData = [
  {
    id:1,
    plainName:'IndiGo',
    logo:require('../Images/indigo.png'),
    depart:'10:15',
    duration:'2H, 15M',
    arrive:'12:30',
    price:'₹ 5,700',
  },
  {
    id:2,
    plainName:'Air India',
    logo:require('../Images/airIndia.png'),
    depart:'10:30',
    duration:'2H, 05M',
    arrive:'11:30',
    price:'₹ 5,700',
  },
   {
    id:3,
    plainName:'Air India',
    logo:require('../Images/airIndia.png'),
    depart:'10:30',
    duration:'2H, 05M',
    arrive:'11:30',
    price:'₹ 5,700',
  }
]

const Screen1 = () =>{

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.mainController}>
      {/* Header Part*/}
    
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Icons  name='arrow-left' size={24} color="white"></Icons>
        </TouchableOpacity >
         <Text style={styles.headerText}>Search Result</Text>

         <TouchableOpacity style={styles.notificationButton} onPress={()=>{navigation.navigate('ScreenTask2')}}>
          <Icon  name="notifications" size={24} color="white" ></Icon>
           <View style={styles.notification}><Text style={styles.notificationText}>1</Text></View>
         </TouchableOpacity>
      </View>

     <View style={styles.routeSection}>
         <ImageBackground source={require('../Images/image_copy.png')}  style={styles.mapImage}></ImageBackground>

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


      {/* Get Flight Data*/}
      <ScrollView style={styles.flightList}>
        {
          flightData.map(flight=>(
            <View style={styles.flightData1}>
                        
              <View key={flight.id} style={styles.card}>

              <View style={styles.card1}>
                <Text style={styles.AirlineName}>{flight.plainName}</Text>
                <Image source={flight.logo} style={styles.logo}></Image>
                <Text style={styles.price}>{flight.price}</Text>
              </View>

              <View style={styles.flightDetails}>
                <View style={styles.timeSection}>
                  <Text style={styles.departLabel}>Depart</Text>
                  <Text style={styles.time}>{flight.depart}</Text>
                </View>


                <View style={styles.durationContainer}>
                  <View style={styles.durationLine}></View>
                  <View style={styles.durationContain}>
                      <Text style={styles.duration}>{flight.duration}</Text>
                  </View>
                  <View style={styles.durationLine1}></View>
                </View>
                

                <View style={styles.timeSection}>
                  <Text style={styles.arrive}>Arrive</Text>
                  <Text style={styles.time}>{flight.arrive}</Text>
                </View>
                
              </View>

              <TouchableOpacity style={styles.viewMore}>
                <Text style={styles.viewMoreText}>View More</Text>
              </TouchableOpacity>
              

            
            </View>
            
            <View style={styles.circle1}/>
            <View style={styles.circle2}/> 
           </View>
           
 
          ))
        }
      </ScrollView>
   
  </SafeAreaView>  
  );
}

const styles = StyleSheet.create({
  mainController:{
    flex:1,
    backgroundColor:'#e1e3e1'
  },
  container:{
    backgroundColor:'#F5F5F5',
    flex:1
  },
  header: { 
    backgroundColor: '#D4376F', 
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: 16, 
    height:80,  
  },
  backButton:{
    padding:5,
    marginTop:7
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop:20,
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

  routeSection:{
   height: 200,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#D4376F',
  },
   mapImage:{
     width: '100%',
     height: '100%',
    opacity: 0.9,
    justifyContent:'center',
    position:'absolute'

  },
  routeImage:{
    height:40,
    width:20,
  },
  flight:{
    height:25,
    width:25,
    position:'absolute',
    marginBottom:42
  },
  routeInfo:{
   flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: -100,
  },
  flightData1:{
      flexDirection:'row',
      justifyContent:'center'
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
  routeAirplane: {
    transform: [{ rotate: '180deg' }],
  },
  availableFlights: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    opacity: 0.9,
    paddingBottom: 20
  },
  flightList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 15,
  },
  card:{
    flex:1,
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    padding:10,
    marginBottom:15,
    shadowColor:'#000',
    elevation: 2,
    shadowOpacity:0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    paddingHorizontal:26,
    height:183
  },
  card1:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between' ,
    marginBottom: 10,
    
  },
  AirlineName:{
    fontWeight:'bold',
    fontSize:20
  },
  
  logo: { 
    width: 88.46, 
    height: 48, 
    resizeMode: 'contain' 
  },
  price: { 
    color: '#FF7A00', 
    fontWeight: 'bold',
    fontSize:20
   },
   flightDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom:10
   },
   timeSection: {
    alignItems: 'center',
    
  },
  time: {
    fontSize: 20,
    fontWeight: '900',
    color: '#333',
  },
  durationContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent:'center',
  },
  durationContain:{
    borderColor: '#666',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginHorizontal: 8,
    backgroundColor: '#fff',
  },
  durationLine:{
    height: 2,
    backgroundColor: '#ccc',
    width:40,
    marginRight:-10
    
  },
  durationLine1:{
    height: 2,
    backgroundColor: '#ccc',
    width:40,
    marginLeft:-10
    
  },
  departLabel: {
    fontSize: 12,
    color: '#B5B2B2',
    marginBottom: 2,
  },
  duration: {
    fontSize: 12,
    color: '#B5B2B2',
    fontWeight: '500',
  },
  arrive:{
    fontSize: 12,
    color: '#B5B2B2',
    marginBottom: 2,
    //fontWeight:'200'
  },
   viewMore:{
    marginTop:10,
    alignItems:'center',
   },
   viewMoreText:{
    color:'black',
    fontWeight:'bold'
   },
   circle1:{
    width:30,
    height:30,
    borderRadius:15,
    position:'absolute',
    left:-15,
    backgroundColor:'#e1e3e1',
    bottom:55
   },
   circle2:{
    width:30,
    height:30,
    borderRadius:15,
    marginLeft:10,
    position:'absolute',
    right:-15,
    bottom:55, 
    backgroundColor:'#e1e3e1'
   }

   
})

export default Screen1;
