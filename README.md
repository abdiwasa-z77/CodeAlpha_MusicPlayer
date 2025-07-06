# CodeAlpha_MusicPlayer
Frontend Internship Project for CodeAlpha
# Audio Player

A simple, stylish web-based audio player built with HTML, CSS, and JavaScript.  
It features album art, song title/artist display, a progress bar, time display, and player controls (repeat, previous, play/pause, next, shuffle).

---

## Features

- Responsive and modern UI
- Album art display
- Song title and artist info
- Play, pause, next, previous, repeat, and shuffle controls
- Progress bar with seek functionality
- Displays current time and total duration
- Font Awesome icons for controls

---

## Project Structure

```
Audio Player/
│
├── Images/              # Album art images (e.g. pexels-grevinkivi-1716580.jpg)
├── Music/               # Audio files (e.g. music1.m4a, music2.m4a, music3.mp3)
│
├── js/
│   ├── playlist.js      # Array of song objects (name, artist, img, audio)
│   └── script.js        # Main player logic
│
├── style.css            # Main stylesheet
├── index.html           # Main HTML file
└── README.md            # Project documentation
```

---

## Getting Started

1. **Clone or Download the Project**

   Download the folder or clone the repository to your local machine.

2. **Add Your Audio and Images**

   - Place your audio files in the `Music/` folder.
   - Place your album art images in the `Images/` folder.
   - Update `js/playlist.js` to match your files.

3. **Open in Browser**

   Open `index.html` in your web browser.

---

## Customizing the Playlist

Edit `js/playlist.js` to add or change songs:

```javascript
let songs = [
    {
        name : "Song Title",
        artist : "Artist Name",
        img : "image-file-name-without-extension",
        audio : "audio-file-name-with-extension"
    },
    // Add more songs here
]
```
- `img` should match the image file in `Images/` (without `.jpg` if your code adds it).
- `audio` should match the audio file in `Music/` (with extension, e.g. `music1.m4a`).

---

## Controls

- **Repeat:** Restarts the current song.
- **Previous:** Plays the previous song.
- **Play/Pause:** Toggles playback.
- **Next:** Plays the next song.
- **Shuffle:** Plays a random song.
- **Progress Bar:** Click to seek to a different part of

## License

This project is for educational and personal use.

---

**Created by Abdiwasa Abdilahi Abdi**
