import React from 'react'
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/components/Tabs';
import { useGetWeather } from './hooks/useGetWeather';
import ErrorItem from './src/components/ErrorItem';



export default function App() {

  const [loading, errorMsg, weatherData] = useGetWeather()

  if (weatherData && weatherData.list) {
    // console.log('########################', weatherData.list, '#####################')
    return (
      <NavigationContainer>
        <Tabs weather={weatherData} />
      </NavigationContainer>
    );
  }

  if (loading) {
    return (
      <View style={app.container}>
        <ActivityIndicator size={'large'} color={'tomato'} />
      </View>
    )
  }

  if (errorMsg) {
    return (
      <View style={app.container}>
        <ErrorItem/>
      </View>
    )
  }


}


const app = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})