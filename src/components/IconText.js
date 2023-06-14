import React from 'react'
import { Text, View } from 'react-native'
// import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function IconText(props) {
  const { main,
    iconName,
    iconSize,
    iconStyle,
    textStyle,
    amount } = props

  return (
    <View style={main}>
      <Feather name={iconName} size={iconSize} style={iconStyle} />
      <Text style={textStyle}>{amount}</Text>
    </View>
  )
}
