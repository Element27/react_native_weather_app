/* eslint-disable no-undef */
import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from 'react-native'
import Item from '../components/Item'


// const DATA = [
//   {
//     dt_txt: "2023-02-18 12:00:00",
//     main: {
//       temp_max: 8.55,
//       temp_min: 7.55
//     },
//     weather: [
//       {
//         main: 'Clear'
//       }
//     ]
//   },
//   {
//     dt_txt: "2023-02-18 12:05:00",
//     main: {
//       temp_max: 8.85,
//       temp_min: 7.57
//     },
//     weather: [
//       {
//         main: 'Cloudy'
//       }
//     ]
//   },
//   {
//     dt_txt: "2023-02-18 12:04:00",
//     main: {
//       temp_max: 5.58,
//       temp_min: 5.77
//     },
//     weather: [
//       {
//         main: 'Confused'
//       }
//     ]
//   },
// ]


export default function UpcomingWeather({ data }) {

  const renderItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { wrapper, image, } = uws

  return (
    <SafeAreaView style={wrapper}>

      <ImageBackground
        source={require('../../assets/milky.jpg')}
        resizeMode="cover"
        style={image}
      >
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const uws = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    // paddingTop: 8,

  }

})