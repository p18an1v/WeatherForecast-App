const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places/%7BplaceId%7D/distance?toPlaceId=Q60';

const geoApiOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'd7cda8495dmsh71a81f970a1d293p125d7fjsn4016c6c4ca58',
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
    }
};

export { GEO_API_URL, geoApiOptions };

export const WEATHER_API_URL = "https://api.openweathermap.org/";

export const WEATHER_API_KEY = "2ed715f527ec43068b38737e6949ce92"

// get your weather api from open https://openweathermap.org/
// get your cities api from https://rapidapi.com/wirefreethought/api/geodb-cities