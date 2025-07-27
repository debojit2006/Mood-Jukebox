// In script.js

const musicLibrary = [
    // Your new Romantic songs
    { title: "Chain Aap Ko", src: "music/Chain Aap Ko .mp3", tags: ["romantic"] },
    { title: "Khuda Bhi", src: "music/Khuda bhi.mp3", tags: ["romantic"] },
    { title: "Khuda Jaane", src: "music/Khuda Jaane.mp3", tags: ["romantic"] },
    { title: "Rishte Naate", src: "music/Rishte Naate.mp3", tags: ["romantic"] },
    { title: "Sawan Aaya Hai", src: "music/Sawan Aay hai .mp3", tags: ["romantic"] },
    { title: "Tu Hi Meri Shab Hai", src: "music/Tu Hi Meri Shab Hai .mp3", tags: ["romantic"] },

    // Example songs for other moods
    { title: "Good Day Sunshine", src: "music/good-day.mp3", tags: ["happy", "energetic"] },
    { title: "Acoustic Breeze", src: "music/acoustic-breeze.mp3", tags: ["happy", "chill"] },
    { title: "Lofi Study Beats", src: "music/lofi-study.mp3", tags: ["chill", "focus"] },
    { title: "Run The Track", src: "music/run-the-track.mp3", tags: ["energetic"] },
    { title: "Ambient Mind", src: "music/ambient-mind.mp3", tags: ["focus"] }
];

const moodButtons = document.querySelectorAll('.mood-btn');
const audioPlayer = document.getElementById('audio-player');
const songTitleEl = document.getElementById('song-title');

moodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Stop the link from navigating
        const mood = button.dataset.mood;
        playMusicForMood(mood);
    });
});

function playMusicForMood(mood) {
    const moodPlaylist = musicLibrary.filter(song => song.tags.includes(mood));

    if (moodPlaylist.length === 0) {
        songTitleEl.textContent = `No songs found for mood: ${mood}`;
        return;
    }

    const randomSong = moodPlaylist[Math.floor(Math.random() * moodPlaylist.length)];

    audioPlayer.src = randomSong.src;
    songTitleEl.textContent = randomSong.title;
    audioPlayer.play();
}

// Optional: Play another song of the same mood when one ends
audioPlayer.addEventListener('ended', () => {
    // This part is tricky because we don't know the last mood selected.
    // For a better experience, we would store the current mood.
    // This basic version will just stop. A more advanced version is below.
});
