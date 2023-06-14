import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

export default function ErrorItem() {

  const { container, errorText } = styles
  return (
    <View style={container}><FontAwesome5 name="sad-tear" size={100} color="#B00020" />
      <Text style={errorText}>
        Something went wrong...
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 30,
    color: "#0f0f0f",
    textAlign: 'center'
  }
})