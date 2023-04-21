// © 2023 H8.LOL | All rights reserved.
const titles = ['H8', 'Everyone', 'H8', 'Everyone'];
let index = 0;

function rotateTitle() {
  document.title = titles[index];
  index = (index + 1) % titles.length;
}

setInterval(rotateTitle, 1000); // Change title every second