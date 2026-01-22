var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var icons = document.getElementById("icon")
var body = document.getElementById("body")

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
function showDate(){
   let dateTxt = document.getElementById("date")
   let date = new Date()
   const formatted =
      `${date.getHours().toString().padStart(2,'0')}:` +
      `${date.getMinutes().toString().padStart(2,'0')}:` +
      `${date.getSeconds().toString().padStart(2,'0')}`;

   dateTxt.innerHTML = `${formatted}` 
}

showDate()

setInterval(showDate, 1000)
let Name = document.getElementById("songtitle")
let artist = document.getElementById("songArtist")


function song2(){
    let song = document.getElementById("song") 
    song.src = "On The Flip - The Grey Room _ Density & Time.mp3"
    song.load();
    song.play();
    Name.innerHTML = "On The Flip"
    artist.innerHTML = "The Grey Room / Density & Time"

}
function song1(){
    let song = document.getElementById("song") 
    song.src = "Go! - NEFFEX.mp3"
    song.play();
    Name.innerHTML = "Go!"
    artist.innerHTML = "NEFFEX"

}
function song3(){
    let song = document.getElementById("song") 
    song.src = "A Stroll - The Grey Room _ Density & Time.mp3"
    song.play();
    Name.innerHTML = "A Stroll"
    artist.innerHTML = "The Grey Room / Density & Time"


}
function song4(){
    let song = document.getElementById("song") 
    song.src = "Cooked - The Grey Room _ Golden Palms.mp3"
    song.play();
    Name.innerHTML = "Cooked"
    artist.innerHTML = "The Grey Room / Golden Palms"

}
function song5(){
    let song = document.getElementById("song") 
    song.src = "Claim To Fame - The Grey Room _ Clark Sims.mp3"
    song.play();
    Name.innerHTML = "Claim to Fame"
    artist.innerHTML = "The Grey Room / Clark Sims"

}
const passwordBox = document.getElementById("Pass");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbols = "@#$&^%_{(!";

const allChars = upperCase + lowerCase + num + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    while (password.length < length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    passwordBox.value = password;
    
}
function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
const apiKey = "bfe383c76d0941cb47033aebadceabcf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    document.querySelector(".City").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/Rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    console.log(data);
}
searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})

const calculatorBtn = document.getElementById("calculatorBtn")
const musicBtn = document.getElementById("musicBtn")
const passwordBtn = document.getElementById("passwordBtn")
const weatherBtn = document.getElementById("weatherBtn")
const timerBtn = document.getElementById("timerBtn")


function app1() {
    let calculator = document.getElementById("calculatorRec")
    calculator.style.display = "flex"
}
function app2(){
    let music = document.getElementById("musicPlr")
    music.style.display = "flex"
}
function app3(){
    let pass = document.getElementById("PassGen")
    pass.style.display = "flex"
}
function app4(){
    let weather = document.getElementById("cardWeather")
    weather.style.display = "flex"
}
function app5(){
    let timer = document.getElementById("Timer")
    timer.style.display = "flex"
}









