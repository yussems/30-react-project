const div = document.getElementById("main");

const soundsName = [
  "dubstep",
  "epic",
  "extremeaction",
  "instinct",
  "smile",
  "thejazzpiano",
];

soundsName.map((item) => {
  const audio = document.createElement("audio");
  audio.src = `./sounds/${item}.mp3`;
  audio.id = `${item}`;
  const button = document.createElement("button");
  button.innerText = `${item}`;
  button.className ='btn'
  button.addEventListener("click", () => {
      stop();
    audio.play();
  });
  div.appendChild(audio);
  div.appendChild(button);
});

function stop() {
  soundsName.map((item) => {
    const data = document.getElementById(item);
    data.pause()
  });
}
