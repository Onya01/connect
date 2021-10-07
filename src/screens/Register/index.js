import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import RegisterComponent from '../../components/SignUp';
import { LOGIN } from '../../constants/routeNames';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';

const Register = () => {
  const [form, setForm] = useState({});
  const {Navigate} = useNavigation();
  const [errors, setErrors] = useState({});
  const {
    authDispatch, 
    authState: {error, loading,  data},
  } = useContext(GlobalContext);

      useEffect(() => {
         if (data) {
      Navigate(LOGIN);
    }
    }, [dta]);

    useFocusEffect(
      React.useCallback(() => {
       if (data || error) {
         clearAuthState()(authDispatch);
       }
      }, [data, error]),
    );

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
     if (name=== 'password') {
       if (value.length < 6) {
        setErrors((prev) => {
         return {...prev, userName: 'This field needs min 6 characters'}
        });
      } else {
        setErrors((prev) => {
         return {...prev, [name]: null}
        });
      }
     } else {
      setErrors((prev) => {
       return {...prev, [name]: null}
      });
     }
    } else {
     setErrors((prev) => {
      return {...prev, [name]: 'This field is required'}
     });
    }
  };

  const onSubmit = () => {
    // validation
    // console.log('form :>> ',form);

    if(!form.userName) {
     setErrors((prev) => {
      return {...prev, userName: 'please add a username'}
     });
    }

    if(!form.firstName) {
     setErrors((prev) => {
      return {...prev, firstName: 'please add a firstname'}
     });
    }

    if(!form.lastName) {
     setErrors((prev) => {
      return {...prev,lastName: 'please add a lastname'}
     });
    }

    if(!form.email) {
     setErrors((prev) => {
      return {...prev, email: 'please add a email'}
     });
    }

    if(!form.password) {
     setErrors((prev) => {
      return {...prev, password: 'please add a password'}
     });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every((item)=> item.trim().length > 0) && 
      Object.values(errors).every((item)=> !item)) {
        register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error} 
      loading={loading}
    />
  );
};

export default Register;
