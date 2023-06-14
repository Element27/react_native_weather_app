import { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import { WEATHER_KEY } from '@env'



export const useGetWeather = () => {

  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState()
  const [weatherData, setWeatherData] = useState([])
  const [lat, setLat] = useState([])
  const [lon, setLon] = useState([])


  const fetchWeatherData = async () => {

    try {
      const resp = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`)
      const data = await resp.json()
      setWeatherData(data)

    } catch (err) {
      setErrorMsg("Couldnot set weather")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData()
    })()
  }, [lat, lon])


  return [loading, errorMsg, weatherData]
}