
getWeather = (city) => {
    const weather = undefined;
    let url = `http://api.openweathermap.org/data/2.5/weater?q=${city}&units=imperial&appid=${apiKey}`;
    console.log(url);
    const req = request(url, bv);
    while (weather === undefined) {
        require('deasync').runLoopOnce();
    }
    return weather;
}