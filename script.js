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


function next(){
    let song = document.getElementById("song") 
    song.src = "On The Flip - The Grey Room _ Density & Time.mp3"
    song.load();
    song.play();

}
function prev(){
    let song = document.getElementById("song") 
    song.src = "Go! - NEFFEX.mp3"
    song.play();

}

