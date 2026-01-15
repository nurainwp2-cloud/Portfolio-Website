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
   let d = new Date()
   const formatted =
      `${d.getHours().toString().padStart(2,'0')}:` +
      `${d.getMinutes().toString().padStart(2,'0')}:` +
      `${d.getSeconds().toString().padStart(2,'0')}`;

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



