import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import CustomButton from "../common/CustomButton";
import Container from "../common/Container";
import Input from "../common/Input";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames'

const RegisterComponent = ({onSubmit,
      onChange,
      form,
      loading,
      error,
      errors}) => {
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
     <Text style={styles.subTitle}>Create a free account</Text>

     <View style={styles.form}>

       {error?.error&&<Text>{error.erro}</Text>}
      <Input
        label='Username' 
        iconPosition='right'
        placeholder='Enter Username'
        error={errors.userNam||error?.username?.[0]}
        onChangeText={(value)=> {
          onChange({name: 'userName', value});
        }}
      />

     <Input
      label='First name' 
      iconPosition='right'
      placeholder='Enter First name'
      onChangeText={(value)=> {
        onChange({name: 'firstName', value});
      }}
      error={errors.firstName||error?.first_name?.[0]}
    />

    <Input
      label='Last Name' 
      iconPosition='right'
      placeholder='Enter Last name'
      error={errors.lastName||error?.last_name?.[0]}
      onChangeText={(value)=> {
        onChange({name: 'lastName', value});
      }}
    />

    <Input
      label='Email' 
      iconPosition='right'
      placeholder='Enter Email'
      error={errors.email||error?.email?.[0]}
      onChangeText={(value) => {
        onChange({name: 'email', value});
      }}
    />

    <Input
      label='Password'
      placeholder='Enter Password'
      secureTextEntry={true} 
      icon={<Text>show</Text>}
      iconPosition='right'
      error={errors.password||error?.password?.[0]}
      onChangeText={(value)=> {
        onChange({name: 'password', value});
      }}
    />
    {console.log(`error`, error)}
    <CustomButton 
      loading={loading} 
      onPress={onSubmit}
      disabled={loading} 
      primary 
      title='submit' 
    />

    <View style={styles.createSection}>
     <Text style={styles.infoText}>Already have account?</Text>
     <TouchableOpacity onPress={() =>{navigate(LOGIN)}}>
      <Text style={styles.linkBtn}>Login</Text>
     </TouchableOpacity>
    </View>
    </View>
    </View>
  </Container>
 )
}

export default RegisterComponent;
