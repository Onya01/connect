import React from 'react'
import { ScrollView, View } from 'react-native'

const Container = ({style, children}) => {
 return (
  <ScrollView>
  <View style={[styles.wrapper, style]}>{children}
  </View>
  </ScrollView>
 )
}

export default Container;
