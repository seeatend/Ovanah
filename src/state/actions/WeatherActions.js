import { getWoeidByCity, getWoeidByLattlong, getMetaWeather } from '../../service'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const FETCHING_WEATHER = 'FETCHING_WEATHER'
export const FAILED_FETCHING_WEATHER = 'FAILED_FETCHING_WEATHER'
export const SAVED_LOCATION = 'SAVED_LOCATION'
export const FAILED_LOCATION = 'FAILED_LOCATION'

const fetchingWeather = () => ({
  type: FETCHING_WEATHER
})

const failedFetchingWeather = error => ({
  type: FAILED_FETCHING_WEATHER,
  error
})

const failedLocation = error => ({
  type: FAILED_LOCATION,
  error
})

export const fetchWeatherByCity = city => {
  return dispatch => {
    dispatch(fetchingWeather())
    return getWoeidByCity(city)
      .then(locations => {
        if(locations.length !== 0) {
          dispatch({
            type: SAVED_LOCATION,
            location: locations[0]
          })
          return getMetaWeather(locations[0].woeid)
        } else {
          dispatch({
            type: SAVED_LOCATION,
            location: {}
          })
          return Promise.reject({location: 'The city is not existed like that.'})
        }
      })
      .then(payload => {
        dispatch({
          type: FETCH_WEATHER,
          payload
        })
      })
      .catch(error => {
        error.location && dispatch(failedLocation(error.location))
        error.weather && dispatch(failedFetchingWeather(error.weather))
      })
  }
}

export const fetchWeatherBylattlong = coordinate => {
  return dispatch => {
    dispatch(fetchingWeather())
    return getWoeidByLattlong(coordinate)
      .then(locations => {
        if(locations.length !== 0) {
          dispatch({
            type: SAVED_LOCATION,
            location: locations[0]
          })
          return getMetaWeather(locations[0].woeid)
        } else {
          dispatch({
            type: SAVED_LOCATION,
            location: {}
          })
          return Promise.reject({location: 'The city is not existed like that.'})
        }
      })
      .then(payload => {
        dispatch({
          type: FETCH_WEATHER,
          payload
        })
      })
      .catch(error => {
        error.location && dispatch(failedLocation(error.location))
        error.weather && dispatch(failedFetchingWeather(error.weather))
      })
  }
}

