/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import React from 'react';
import AppNavContainer from './src/navigations';
import GlobalProvider from './src/context/provider';


const App = () => {

  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>;
    </GlobalProvider>
  )
};

export default App;
