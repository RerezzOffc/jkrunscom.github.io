// © 2023 H8.LOL | All rights reserved.
const showPageButton = document.getElementById('show-page');
const blackScreen = document.getElementById('black-screen');
const page = document.getElementById('page');
const audio = new Audio('https://cdn.discordapp.com/attachments/1059291534626922568/1090792373983907930/Juice_WRLD_-_Cake_unreleased.mp3');

showPageButton.addEventListener('click', () => {
  blackScreen.style.display = 'none';
  page.style.display = 'block';
  audio.play();
});