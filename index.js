const panels = document.querySelectorAll(".panel");

let audio_play = document.getElementsByTagName("audio");
console.log(audio_play);

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    audio_play[0].play();
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
