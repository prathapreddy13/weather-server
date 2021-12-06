const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1644588b1a0acb7bf7e63163611644a3&units=m&query='+latitude+','+longitude;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + ' It is currently ' + body.current.temperature + ' degress out. And  it feels ' + body.current.feelslike )
        }
    })
}

module.exports = forecast

