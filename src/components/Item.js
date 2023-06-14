import React from 'react'

import { StyleSheet, Text, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import moment from 'moment/moment';

import { weatherType } from '../utils/weathertype';

export default function Item({ dt_txt, min, max, condition }) {
  const { body, det, itemstyle, right, temp, dtWrapper } = isStyle

  return (

    <View style={itemstyle}>
      <Feather name={weatherType[condition].icon} size={50} color="white" />
      <View style={right}>

        <View style={dtWrapper}>
          <Text style={det}>{moment(dt_txt).format('dddd')}</Text>
          <Text style={det}>{moment(dt_txt).format('h:mm:ss a')}</Text>
        </View>
        <View style={body}>
          <Text style={temp}>{`high: ${Math.round(max)}°`}</Text>
          <Text style={temp}>{`low: ${Math.round(min)}°`}</Text>
        </View>
      </View>
    </View>
  )
}


const isStyle = StyleSheet.create({
  itemstyle: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#6699ccbf",
    borderRadius: 6,
  },
  right: {
    width: "70%",
    gap: 8
  },
  det: {
    fontSize: 14,
    fontWeight: 700,
    textAlign: "right"
  },
  body: {
    width: '100%',
    rowGap: 4
  },
  temp: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    // width: "50%",
    fontWeight: 700,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#5e5e5e",
    borderRadius: 8
  },
  dtWrapper: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'space-between'
  }
})