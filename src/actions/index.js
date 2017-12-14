import axios from 'axios';

const TRIMET_APP_ID = "188CEC93A5CE2112E3919CC5B";


export const FETCH_LOCATION = 'FETCH_LOCATION';
export const FETCH_STOPS = 'FETCH_STOPS';
export const FETCH_ARRIVALS = 'FETCH_ARRIVALS';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';
const STOPS_URL = `https://developer.trimet.org/ws/V1/stops?appID=${TRIMET_APP_ID}&json=true` //&ll=45.5292256,-122.6623705`
const ARRIVALS_URL = `https://developer.trimet.org/ws/V1/arrivals?&appID=${TRIMET_APP_ID}&json=true` //locIDs=8378

// var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

export function fetchStopsWithLocation(lat,lng) {
   console.log("fetching with location", lat, lng)
   const url  = `${STOPS_URL}&ll=${lat},${lng}`;
   const request = axios.get(url);   
   return {
      type: FETCH_STOPS,
      payload: request
   };
}

export function fetchStops(address) {
   const encodedAddress = encodeURIComponent(address);
   const url  = `${ROOT_URL}address=${address}`;
   const request = axios.get(url).then((response)=>{
      const lat = response.data.results[0].geometry.location.lat;
      const lng = response.data.results[0].geometry.location.lng;
      const url  = `${STOPS_URL}&ll=${lat},${lng}`;
      return axios.get(url);   
   });
   return {
      type: FETCH_STOPS,
      payload: request
   };
}

export function fetchArrivals(locID) {
   const url  = `${ARRIVALS_URL}&locIDs=${locID}`;
   const request = axios.get(url);
   return {
      type: FETCH_ARRIVALS,
      payload: request
   };
}