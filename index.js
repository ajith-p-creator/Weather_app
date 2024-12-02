let ValueSearch = document.getElementById('ValueSearch')
let CIty = document.getElementById('City')
let temperature = document.getElementById('temperature')
let description = document.getElementById('description')
let clouds = document.getElementById('clouds')
let Humidity = document.getElementById('Humidity')
let Pressure = document.getElementById('Pressure')
let form = document.querySelector('form')
let main = document.querySelector('main')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (ValueSearch.value != '') {
        searchWeather()
    }
})
let apiKey = "5b4bee0ba241d092159faf007e166080"

let url = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}`;
const searchWeather = () => {
    fetch(url + '&q=' + ValueSearch.value)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.cod == 200) {
                console.log(data.name);
                Name.innerText = data.name
                img.src = "https://flagsapi.com/" + data.sys.country + "/shiny/32.png"
                img2.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png"
                tem.innerHTML = data.main.temp
                description.innerHTML = data.weather[0].description
                Humidity.innerHTML = data.main.humidity
                clouds.innerHTML = data.clouds.all
                Pressure.innerHTML = data.main.pressure
            }
            else {
                main.classList.add('error')
                setTimeout(() => {
                    main.classList.remove('error')
                    alert('enter a valid city')

                }, 1000);

            }
            ValueSearch.value = " "


        })
}
const iniApp=()=>{
    ValueSearch.value="kerala"
    searchWeather()
}
iniApp()