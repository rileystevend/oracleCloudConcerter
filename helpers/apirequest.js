const axios = require('axios');
const jamKey = process.env.jamKey || 'jh8fu4aex27733bzszu6kprj';
const foodKey = process.env.foodKey || 'dd071c27f3428a592bdf3cec117a2cc7';

const getPair = (zipcode, date)=> {
  //add showIndex, and restaurantIndex parameters?
  let date2 = date.slice(0, date.length-2) + (parseInt(date.slice(date.length-2)) + 1).toString();
  return (
    axios.get(`http://api.jambase.com/events?zipCode=${zipcode}&radius=7&startDate=${date}&endDate=${date2}&page=0&api_key=${jamKey}`)
    .then((shows) => {
      const set = shows.data.Events;
      //create var showInd = showIndex || Math.floor....; 
      const show = set[Math.floor(Math.random()*set.length)];
      let long = show.Venue.Longitude.toString();
      let lat = show.Venue.Latitude.toString();
      //return whole show
      return show;
      // return axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`, {
      //   'headers': {
      //     'user-key': foodKey
      //   }
      // })
      // .then((result2) => {
      //   const places = result2.data.nearby_restaurants;
      //   //create var restInd = restaurantIndex || Math.floor....;
      //   return [show, places[Math.floor(Math.random()*places.length)]]
      // })
      // .catch((err) => {
      //   console.log('this is error in resul2', err)
      // })
    })
    .catch((err) => {
      console.log(err, 'ERROR IN RESULT1');
    })
  )
}  

module.exports.getPair = getPair;