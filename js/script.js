// --- DOM element selections ---
const content = document.querySelector(".content"),
    Playimage = content.querySelector(".music-image img"),
    musicName = content.querySelector(".music-titles .name"),
    musicArtist = content.querySelector(".music-titles .artist"),
    Audio = document.querySelector(".main-song"),
    playBtnIcon = content.querySelector(".play-pause span"),
    prevBtn = content.querySelector("#prev"),
    nextBtn = content.querySelector("#next"),
    progressBar = content.querySelector(".progress-bar"),
    progressDetails = content.querySelector(".progress-details"),
    repeatBtn = content.querySelector("#repeat"),
    Shuffle = content.querySelector("#shuffle");

let index = 1;

// --- Load initial song on page load ---
window.addEventListener("load", () => {
    loadData(index);
    Audio.play();
});

// --- Load song data into UI ---
function loadData(indexValue){
    musicName.innerHTML = songs[indexValue - 1].name;
    musicArtist.innerHTML = songs[indexValue - 1].artist;
    Playimage.src = "Images/" + songs[indexValue - 1].img + ".jpg";
    Audio.src = "Music/" + songs[indexValue - 1].audio;
}

// --- Play/Pause button logic ---
playBtnIcon.addEventListener("click", () => {
    const isMusicPaused = content.classList.contains("paused");
    if(isMusicPaused){
        pauseSong();
    } 
    else {
        playSong();
    }
});

// --- Play song and update icon ---
function playSong() {
    content.classList.add("paused");
    playBtnIcon.classList.remove("fa-play");
    playBtnIcon.classList.add("fa-pause");
    Audio.play();
}

// --- Pause song and update icon ---
function pauseSong() {
    content.classList.remove("paused");
    playBtnIcon.classList.remove("fa-pause");
    playBtnIcon.classList.add("fa-play");
    Audio.pause();
}

// --- Next/Previous button logic ---
nextBtn.addEventListener("click", () => {
    nextSong();
})

prevBtn.addEventListener("click", () => {
    prevSong();
})

// --- Go to next song ---
function nextSong() {
    index++;
    if(index > songs.length) {
        index = 1;
    }
    loadData(index);
    playSong();
}

// --- Go to previous song ---
function prevSong() {
    index--;
    if(index <= 0) {
        index = songs.length;
    }
    loadData(index);
    playSong();
}

// --- Update progress bar and current time as song plays ---
Audio.addEventListener("timeupdate", (e) => {
    const initialTime = e.target.currentTime;
    const finalTime = e.target.duration;
    let BarWidth = (initialTime / finalTime) * 100;  
    progressBar.style.width = BarWidth + "%";

    // Update current time display
    let currentTimeData = content.querySelector(".current");
    let currentMinutes = Math.floor(initialTime / 60);
    let currentSeconds = Math.floor(initialTime % 60);
    if(currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
    }
    currentTimeData.innerHTML = currentMinutes + ":" + currentSeconds;
});

// --- Allow user to seek by clicking the progress bar ---
progressDetails.addEventListener("click", (e) => {
    let progressWidth = progressDetails.clientWidth;
    let clickedOffsetX = e.offsetX;
    let MusicDuration = Audio.duration;
    Audio.currentTime = (clickedOffsetX / progressWidth) * MusicDuration;
});

// --- Display total duration when song data is loaded ---
Audio.addEventListener("loadeddata", () => {
    let finalTimeData = content.querySelector(".final");
    let AudioDuration = Audio.duration;
    let finalMinutes = Math.floor(AudioDuration / 60);
    let finalSeconds = Math.floor(AudioDuration % 60);
    if(finalSeconds < 10) {
        finalSeconds = "0" + finalSeconds;
    }
    finalTimeData.innerHTML = finalMinutes + ":" + finalSeconds;
});

// --- Repeat button: restart current song ---
repeatBtn.addEventListener("click", () => {
    Audio.currentTime = 0;
});

// --- Shuffle button: play a random song ---
Shuffle.addEventListener("click", () => {
    var randomIndex = Math.floor(Math.random() * songs.length) + 1;
    loadData(randomIndex);
    playSong();
});

// --- When song ends, play next song automatically ---
Audio.addEventListener("ended", () => {
    index++;
    if(index > songs.length) {
        index = 1;
    }
    loadData(index);
    playSong();
});