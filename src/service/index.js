import axios from 'axios'

const baseURL = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/'
const headers = {
  'Access-Control-Allow-Origin': '*',
}

export const getWoeidByCity = city => {
  return axios({
    method:'get',
    url:'/location/search',
    params: {
      query: city
    },
    baseURL,
    headers,
  })
  .then(res => {
    return Promise.resolve(res.data)
  })
  .catch(err => {
    return Promise.reject({location: err})
  })
}

export const getWoeidByLattlong = coordinate => {
  return axios({
    method:'get',
    url:'/location/search',
    params: {
      lattlong: `${coordinate.lat},${coordinate.lng}`
    },
    baseURL,
    headers,
  })
  .then(res => {
    return Promise.resolve(res.data)
  })
  .catch(err => {
    return Promise.reject({location: err})
  })
}

export const getMetaWeather = woeid => {
  return axios({
    method:'get',
    url:`/location/${woeid}`,
    baseURL,
    headers,
  })
  .then(res => {
    return Promise.resolve(res.data.consolidated_weather[0])
  })
  .catch(err => {
    return Promise.reject({weather: err})
  });
}