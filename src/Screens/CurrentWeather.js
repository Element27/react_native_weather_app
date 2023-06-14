/* eslint-disable no-undef */
import React from 'react'
import { StyleSheet, SafeAreaView, View, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RowText from '../components/RowText';

import { weatherType } from '../utils/weathertype'

export default function CurrentWeather({ data }) {



  const { wrapper,
    container,
    tempStyle,
    feels,
    rangeWrap,
    range,
    lowerSection,
    description,
    comment,
    image,
    tempTxtStyle,
    aTemp,
    aFeel, overlay } = cws

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = data

  const conditionW = weather[0].main
  return (
    <SafeAreaView style={[wrapper]}>
      <ImageBackground
        source={require('../../assets/paper.jpg')}
        resizeMode="cover"
        style={[image]}
      >
        <View style={[overlay, { backgroundColor: weatherType[conditionW].backgroundColor }]}>
          {/* */}


          <View style={container}>
            <Ionicons name={weatherType[conditionW].icon} size={100} color="white" />
            <View style={tempTxtStyle}>
              <Text style={aTemp}>Actual Temperature</Text>
              <Text style={tempStyle}>{temp}</Text>
            </View>

            <View style={tempTxtStyle}>
              <Text style={aFeel}>Feels like</Text>
              <Text style={feels}>{feels_like}</Text>
            </View>

            <RowText
              mainStyle={rangeWrap}
              textOneStyle={range}
              textOne={`high: ${temp_max}`}
              textTwoStyle={range}
              textTwo={`low: ${temp_min}`}
            />
          </View>

          <RowText
            mainStyle={lowerSection}
            textOne={conditionW}
            textTwo={weatherType[conditionW].message}
            textOneStyle={description}
            textTwoStyle={comment}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const cws = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempStyle: {
    color: 'black',
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 700
  },
  feels: {
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
    fontWeight: 700
  },
  rangeWrap: {
    flexDirection: 'row',
    gap: 16
  },
  range: {
    color: 'black',
    fontSize: 20
  },
  lowerSection: {
    justifyContent: "flex-end",
    paddingLeft: 26,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  comment: {
    fontSize: 24
  },
  image: {
    flex: 1
  },
  tempTxtStyle: {
    marginBottom: 20,
  },
  aTemp: {
    fontSize: 28,
    fontWeight: 600
  },
  aFeel: {
    fontSize: 24,
    fontWeight: 600
  },
  overlay: {
    flex: 1,
    // backgroundColor: '#00000080',
  }
});
