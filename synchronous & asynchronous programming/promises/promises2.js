function getWeather () {
    return new Promise(function(resolve, reject) {
        resolve('Rainy')
    })
}

 getWeather()
promise.then(function(data) {
    console.log(data)
})

