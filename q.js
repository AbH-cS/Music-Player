let player = document.getElementById("player")
let controls = document.getElementById("controls")
let ctrl_icon = document.getElementById("ctrl_icon")
let song = document.getElementById("song")

song.onloadedmetadata = function () {
    player.value = song.currentTime;
    player.max = song.duration;
}

function PlayPause() {
    if (ctrl_icon.classList.contains("fa-pause")) {
        song.pause();
        ctrl_icon.classList.add("fa-play")
        ctrl_icon.classList.remove("fa-pause")
    }
    else {
        song.play();
        ctrl_icon.classList.add("fa-pause")
        ctrl_icon.classList.remove("fa-play")
    }
}

if (song.play()) {
    setInterval(() => {
        player.value = song.currentTime;
    }, 500)
}

player.onchange = function () {
    song.play();
    song.currentTime = player.value;
    ctrl_icon.classList.add("fa-pause")
    ctrl_icon.classList.remove("fa-play")

}