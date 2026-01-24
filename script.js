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
const audio = document.getElementById("song");
const audioSrc = document.getElementById("song-src");
const Name = document.getElementById("songtitle");
const artist = document.getElementById("songArtist");

function playSong(title, artistName, file) {
    Name.textContent = title;
    artist.textContent = artistName;
    audioSrc.src = file;
    audio.load();
    audio.play();
}

function song1() {
    playSong("Go!", "NEFFEX", "songs/go.mp3");
}

function song2() {
    playSong("On The Flip", "The Grey Room / Density & Time", "songs/on-the-flip.mp3");
}

function song3() {
    playSong("A Stroll", "The Grey Room / Density & Time", "songs/a-stroll.mp3");
}

function song4() {
    playSong("Cooked", "The Grey Room / Golden Palms", "songs/cooked.mp3");
}

function song5() {
    playSong("Claim to Fame", "The Grey Room / Clark Sims", "songs/claim-to-fame.mp3");
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

const apps = document.querySelectorAll(".apps li");

function toggleApp(id) {
    apps.forEach(app => {
        if (app.id === id) {
            app.classList.toggle("active");
        } else {
            app.classList.remove("active");
        }
    });
}







