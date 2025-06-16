/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,TouchableOpacity,Image,
  TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Screen5 = () => {

  const navigation = useNavigation();
  const [upi, setUpi] = useState("example@oksbi")
  
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
           <TouchableOpacity style={styles.backButton} onPress={()=>{navigation.navigate('ScreenTask4')}}>
              <Icons name="arrow-left" color='white' size={24}></Icons>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>Payment Details</Text>

             <TouchableOpacity style={styles.notificationButton}>
              <Icon name="notifications" size={24} color='white'></Icon>
              <View style={styles.notification}>
                <Text style={styles.notificationText}>1</Text>
              </View>
            </TouchableOpacity>
        </View>
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
             <Image source={require('../Images/plain1.png')} style={styles.airlineLogo1}></Image>

              <View>
                <Text style={styles.route}>America JS</Text>
                <Text style={styles.routeTime}>Mon, 17mar - 23:50</Text>
              </View>
              <Image source={require('../Images/arrow.png')} style={styles.arrow}></Image>
                        
              <Image source={require('../Images/plain2.png')} style={styles.airlineLogo1}></Image>
              <View>
                <Text style={styles.route}>Bangalore IND</Text>
                <Text style={styles.routeTime}>Mon, 18mar - 5:00</Text>
              </View>
            </View>
          </View>

          <View style={styles.seat}>
              <TouchableOpacity style={styles.seatDetails}>
                 <Image source={require('../Images/seat.png')}  style={styles.seat2}></Image>
                <Text>1 Seat</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                 <Text style={styles.viewDetails}>View Details</Text>
              </TouchableOpacity>
          </View>
        

          <View style={styles.paymentContainer}>
            <View style={styles.paymentData}>
              <Text style={styles.paymentDetails}>Payment details:</Text>
              <TouchableOpacity style={styles.timeLogo}>
                <Icon name="access-time" color='black' size={20}></Icon>
                <Text style={styles.time}>6:29</Text>
              </TouchableOpacity>
              
            </View>
            
             <Text style={styles.ticket}>Tickets</Text>
             <View style={styles.billContainer}>
              <View style={styles.seaterContain}>
                <TouchableOpacity style={styles.seatLogo}>
                <Image source={require('../Images/seat.png')}  style={styles.seat3}></Image>
                <Text style={styles.seat1}>Seater</Text>
                </TouchableOpacity>
                
                <Text style={styles.price}>₹5000</Text>
              </View>
              <View style={styles.seaterContain}>
                <Text style={styles.seat1}>window seat</Text>
                <Text style={styles.price}>₹400</Text>
              </View>
             </View>

             <Text style={styles.ticket1}>Taxes & Fees</Text>

             <View style={styles.billContainer}>
              <View style={styles.seaterContain}>
                <Text style={styles.seat1}>VAT(18%)</Text>
                <Text style={styles.price}>₹100</Text>
              </View>
              <View style={styles.seaterContain}>
                <Text style={styles.seat1}>ArrowSpeed Fee(12%)</Text>
                <Text style={styles.price}>₹200</Text>
              </View>
             </View>
            
            <View style={styles.totalPriceContainer}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.totalPrice}>₹ 5,700</Text>
            </View>
          </View>

          <View style={styles.promocodeContainer}>
            <Text style={styles.promoCode}>Promo code:</Text>
          </View>

          <Text style={styles.payWith}>Pay With:</Text>

          <View style={styles.paymentModeContainer}>
            <View style={styles.paymentType}>
              <Text style={styles.paymentModeName}>Credit or Debit Cards </Text>
              <View style={styles.creditLogo}>
                <Image source={require('../Images/money.png')} style={styles.icons}></Image>
                <Image source={require('../Images/visa.png')} style={styles.icons}></Image>
              </View>
              <TouchableOpacity>
                 <Icon name='keyboard-arrow-down' color='black' size={20}></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.paymentType}>
              <Text style={styles.paymentModeName}>Wallets</Text>
              <TouchableOpacity>
                 <Icon name='keyboard-arrow-down' color='black' size={20}></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.paymentType}>
              <Text style={styles.paymentModeName}>Unified Payment Interface</Text>
              <TouchableOpacity>
                 <Icon name='keyboard-arrow-up' color='black' size={20}></Icon>
              </TouchableOpacity>
            </View>

            <View style={styles.paymentType1}>
              <Text style={styles.upi}>UPI ID </Text>
              <TextInput
               placeholder='example@oksbi'
               style={styles.textInput}
               value={upi}
               onChangeText={setUpi}
              ></TextInput>
            </View>

            <View style={styles.payButtonContainer}>
              <TouchableOpacity style={styles.payButton}>
                  <Text style={styles.payButtonText}>Pay ₹ 5700</Text>
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
    flex:1,
    backgroundColor: '#F5F5F5',
  },
  container:{
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
    padding: 10,
    paddingVertical:20,
    height:80
  },
  backButton:{
    padding: 5,
    marginTop: 7
  },
  headerTitle:{
    fontSize: 25,
    color: 'white',
    fontWeight: '400',
    marginRight:40
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
  airlineContainer:{
    justifyContent:'space-between',
    backgroundColor:'white',
    shadowColor: '#000',
    shadowRadius: 8,
    elevation: 6,
    paddingLeft:29,
    paddingRight:48
  },
  arrow:{
    height:17,
    width:35,
    marginTop:10
  },
  airlineData:{
    textAlign:'left',
    paddingTop:10,
    borderColor:'#D4376F',
    borderBottomWidth:2,
    borderStyle:'dotted'
  },
  airlineDetails:{
    flexDirection:'row'
  },
  airlineLogo:{
    height:54,
    width:121
  },
  airlineName:{
    left:15
  },
  airlineName1:{
    paddingTop:10,
    fontWeight:'500',
    fontSize:13
  },
  selectedSeat:{
    fontWeight:'300',
    fontSize:11
  },
  ailineLending:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:10
  },
  airlineLogo1:{
    marginTop:8,
    height:17,
    width:20
  },
  route:{
    fontSize:12,
    fontWeight:'700'
  },
  routeTime:{
    fontSize:12,
    fontWeight:'500'
  },
  seat:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
    marginBottom:15
  },
 seat2:{
  height:15,
  width:15,
 },
  seatDetails:{
    flexDirection:'row',
    backgroundColor:'#C7C7C7',
    borderRadius:20,
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:7
  },
  viewDetails:{
    fontSize:12,
    fontWeight:'500',
    textDecorationLine:'underline',
  },
  paymentContainer:{
    marginTop:18,
    paddingRight:25,
    paddingLeft:11,
    paddingTop:18

  },
  paymentData:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  paymentDetails:{
    fontSize:18,
    fontWeight:'500'
  },
  timeLogo:{
    flexDirection:'row'
  },
  time:{
    fontSize:14,
    fontWeight:'500'
  },
  ticket:{
    fontSize:12,
    fontWeight:'700',
    paddingTop:10,
  },
  seat3:{
    height:10,
    width:15,
    marginTop:2
  },
  billContainer:{
    paddingVertical:10,
    textAlign:'center',
    justifyContent:'center',
  },
  seaterContain:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  seat1:{
    fontSize:10,
    paddingBottom:-10,
    fontWeight:'500'
  },
  price:{
    fontSize:12,
    paddingBottom:7,
    fontWeight:'400'
  },
  seatLogo:{
    flexDirection:'row',
    
  },
  icons:{
    height:15,
    width:30,
    marginLeft:10
  },
  ticket1:{
    fontSize:12,
    fontWeight:'700',
    marginTop:-7
  },
  totalPriceContainer:{
    flexDirection:'row',
    paddingTop:5,
    justifyContent:'space-between',
    alignItems:'center'
  },
  total:{
    fontSize:14,
    fontWeight:'700'
  },
  totalPrice:{
    fontSize:20,
    fontWeight:'600'
  },
  promocodeContainer:{
    marginTop:25,
    paddingVertical:10,
    marginBottom:15
  },
  promoCode:{
    borderWidth:2,
    borderStyle:'dashed',
    padding:7,
    fontSize:14,
    fontWeight:'500',
    borderRadius:10,
    borderColor:'#b8b9ba',
    paddingLeft:20
  },
  payWith:{
    fontSize:18,
    fontWeight:'500',
    paddingVertical:10,
    paddingLeft:10,
    marginBottom:15
  },
  paymentModeContainer:{
    paddingVertical:7,
    paddingHorizontal:20
  },
  creditLogo:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    marginLeft:-80
  },
  paymentType:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:7
  },
  paymentType1:{
    flexDirection:'row',
    paddingVertical:5,
    justifyContent:'flex-start',
    marginBottom:10
  },
  paymentModeName:{
    fontSize:12,
    fontWeight:'500',
    marginBottom:15
  },
  upi:{
    fontSize:10,
    fontWeight:'500',
    marginTop:-7,
    paddingTop:8
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop:-7,
    fontWeight:'400',
    fontSize: 8,
    marginLeft:10,
    marginBottom:10,
    width:150,
  },
  payButtonContainer:{
    marginLeft:-15,
    marginTop:-20,
    paddingVertical:10,
    marginBottom:100
  },
  payButton:{
    backgroundColor: '#26A69A',
    paddingVertical: 8,
    borderRadius: 10,
  },
  payButtonText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign:'center',
  }
});

export default Screen5;
