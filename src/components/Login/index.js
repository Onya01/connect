import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomButton from "../../components/common/CustomButton";
import Container from "../../components/common/Container";
import Input from "../../components/common/Input";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
 const {navigate} = useNavigation();
 return (
  
  <Container>
    <Image 
      height={70} 
      width={70} 
      source={require('../../assets/images/logo.png')} 
      style={styles.logoImage} 
    />

    <View>
     <Text style={styles.title}>Welcome to RNContacts</Text>
     <Text style={styles.subTitle}>Please login here</Text>

     <Message retry retryFn={() =>{
       console.log(`222`, 222)
     }} 
     primary onDismiss={() => {}}
     messag ='invalid credentials'/>
     <Message onDismiss={() => {}} danger messag ='invalid credentials'/>
     <Message onDismiss={() => {}} info messag ='invalid credentials'/>
     <Message onDismiss={() => {}} success messag ='invalid credentials'/>
     <View style={styles.form}>
     <Input
      label='Username' 
      iconPosition='right'
      placeholder='Enter Username'
      // error={'This field is require'}
    />

    <Input
      label='Password'
      placeholder='Enter Password'
      secureTextEntry={true} 
      icon={<Text>show</Text>}
      iconPosition='right'
    />
    
    <CustomButton primary title='submit' />
    <View style={styles.createSection}>
     <Text style={styles.infoText}>Need a new account?</Text>
     <TouchableOpacity onPress={() =>{navigate(REGISTER)}}>
      <Text style={styles.linkBtn}>Register</Text>
     </TouchableOpacity>
    </View>
    </View>
    </View>
  </Container>
 )
}

export default LoginComponent;
