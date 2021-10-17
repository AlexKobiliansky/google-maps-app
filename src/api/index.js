import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    });
    return data;
  } catch (e) {
    console.log(e)
  }
}

export const getWeatherData = async (lat, lon) => {
  try {
    const {data} = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather`, {
      params: { lat, lon },
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_RAPID_API_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    });

    return data;
  } catch (e) {
    console.log(e);
  }
}