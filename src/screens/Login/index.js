import React from "react";
import { View, Text } from 'react-native';
import LoginComponent from '../../components/Login';

const Login = () => {
 const [value, onChangeText] = React.useState('');
 return (
   <LoginComponent />
 );
};

export default Login;