// © 2023 H8.LOL | All rights reserved.

const overlay = document.querySelector('.overlay');
const removeOverlayButton = document.querySelector('#remove-overlay');

removeOverlayButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  const audio = new Audio('audio.mp3');
  audio.loop = true;
  audio.play();
  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    audio.play();
  });
});