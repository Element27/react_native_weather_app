import React from 'react'
import { Text, View } from 'react-native'

export default function RowText({ mainStyle, textOneStyle, textOne, textTwoStyle, textTwo }) {
  return (
    <View style={mainStyle}>
      <Text style={textOneStyle}>{textOne}</Text>
      <Text style={textTwoStyle}>{textTwo}</Text>
    </View>
  )
}
