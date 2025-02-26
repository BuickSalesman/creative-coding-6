const kick = document.getElementById("kick");
const kickAudio = document.getElementById("kick-audio");
const boom = document.getElementById("boom");
const boomAudio = document.getElementById("boom-audio");
const snare = document.getElementById("snare");
const snareAudio = document.getElementById("snare-audio");
const hihat = document.getElementById("hi-hat");
const hihatAudio = document.getElementById("hihat-audio");

const ride = document.getElementById("ride");
const rideAudio = document.getElementById("ride-audio");
const crash = document.getElementById("crash");
const crashAudio = document.getElementById("crash-audio");
const rimshot = document.getElementById("rimshot");
const rimshotAudio = document.getElementById("rimshot-audio");
const clave = document.getElementById("clave");
const claveAudio = document.getElementById("clave-audio");

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  switch (key) {
    case "a":
      playSound(kickAudio);
      highlightSoundElement(kick);
      break;
    case "s":
      playSound(boomAudio);
      highlightSoundElement(boom);
      break;
    case "d":
      playSound(snareAudio);
      highlightSoundElement(snare);
      break;
    case "f":
      playSound(hihatAudio);
      highlightSoundElement(hihat);
      break;
    case "h":
      playSound(rideAudio);
      highlightSoundElement(ride);
      break;
    case "j":
      playSound(crashAudio);
      highlightSoundElement(crash);
      break;
    case "k":
      playSound(rimshotAudio);
      highlightSoundElement(rimshot);
      break;
    case "l":
      playSound(claveAudio);
      highlightSoundElement(clave);
      break;

    default:
      console.log("no no no no no");
  }
});

function playSound(audio) {
  audio.currentTime = 0;
  audio.play();
}

function highlightSoundElement(element) {
  element.style.backgroundColor = "yellow";
  setTimeout(() => {
    element.style.backgroundColor = null;
  }, 50);
}
