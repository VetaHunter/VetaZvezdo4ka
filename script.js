const audio = document.querySelector('audio');
const SOURCES = ['samka.mp3', 'chasiki.mp3']
audio.volume = 0.5;

setInterval(() => {
  const currTime = audio.currentTime;
  const randomSource = SOURCES[Math.floor(Math.random() * (SOURCES.length))];
  audio.src = `./${randomSource}`
  audio.currentTime = currTime;
}, 1000)
