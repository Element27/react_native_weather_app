/* eslint-disable no-undef */
import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import IconText from '../components/IconText';
import moment from 'moment';




export default function City({ data }) {
  const { container, imgBack, cntry, place, PC, pop, popCount, icon, rswrapper, rsText, rss, overlay } = city;

  const { name, country, population, sunrise, sunset } = data

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city.jpg')}
        style={imgBack}
        resizeMode='cover'
      >
        <View style={overlay}>
          <Text style={[place, PC]}>{name}</Text>
          <Text style={[cntry, PC]}>{country}</Text>

          <IconText
            main={[pop, PC]}
            iconName={"user"}
            iconSize={40}
            iconStyle={icon}
            textStyle={[popCount, PC]}
            amount={population}
          />

          <View style={rswrapper}>
            <IconText
              main={rss}
              iconName={"sunrise"}
              iconSize={24}
              iconStyle={icon}
              textStyle={rsText}
              amount={moment(sunrise).format('h:mm:ss a')}

            />
            <IconText
              main={rss}
              iconName={"sunset"}
              iconSize={24}
              iconStyle={icon}
              textStyle={rsText}
              amount={moment(sunset).format('h.mm.ss a')}

            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}


const city = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBack: {
    position: 'relative',
    flex: 1,
    resizeMode: "cover"
  },
  place: {
    fontSize: 40,
  },
  cntry: {
    fontSize: 30,
    marginVertical: 20
  },
  PC: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: "white",
    fontWeight: "bold"

  },
  pop: {
    rowGap: 4,
    marginVertical: 30,
    alignItems: 'center'
  },
  popCount: {
    fontSize: 25,
  },
  icon: {
    color: "white",
  },
  rswrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 48,
    marginTop: 30
  },
  rsText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  rss: {
    alignItems: 'center'
  },
  overlay: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center'
  }

})