$(document).ready(function () {
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=2759661&appid=a12cbb39ac5de9c27821c4d4f1dddba3',
        method: 'GET',
        success: function (response) {
            console.log(response);
            document.getElementById('temp').innerHTML = Math.round(parseFloat(response.main.temp) - 273.15);
            document.getElementById('place').innerHTML = response.name;
            weather = document.getElementById('weather');
            var description = response.weather[0].description;
            if (description.indexOf('rain') > 0) {
                description = 'Regen';
            } else if (description.indexOf('cloud') > 0) {
                description = 'Bewolkt';
            } else if (description.indexOf('sunny') > 0) {
                description = 'Zonnig';
            }
            document.getElementById('status').innerHTML = description;
        },
        error: function (error) {
            console.log(error);
        }
    });
});

