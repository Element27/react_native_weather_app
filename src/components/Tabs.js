import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import CurrentWeather from '../Screens/CurrentWeather';
import UpcomingWeather from '../Screens/UpcomingWeather';
import City from '../Screens/City';




const Tab = createBottomTabNavigator();

export default function Tabs(props) {
  const { weather } = props
  return (
    <>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "#f0f0f0",
        tabBarInactiveTintColor: "#383838",
        tabBarStyle: {
          backgroundColor: "#29292c",
        },
        headerStyle: {
          backgroundColor: "#29292c"
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#f0f0f0',
        }
      }}>
        <Tab.Screen name='Current' options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "#f0f0f0" : "#383838"}
            />)
        }}>
          {() => <CurrentWeather data={weather.list[0]} />}
        </Tab.Screen>

        <Tab.Screen name='Upcoming' options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "#f0f0f0" : "#383838"}
            />)
        }}>
          {() => <UpcomingWeather data={weather.list} />}
        </Tab.Screen>

        <Tab.Screen name='City' options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "#f0f0f0" : "#383838"}
            />)
        }}>
          {() => <City data={weather.city} />}
        </Tab.Screen>

      </Tab.Navigator>
    </>
  )
}
