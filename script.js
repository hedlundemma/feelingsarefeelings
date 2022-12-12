const buttonFirst = document.querySelector('.btn-1');
const buttonSecond = document.querySelector('.btn-2');
const heading = document.querySelector('h1');
const feelingsContainer = document.querySelector('.feelings-container');
const paragraph = document.createElement('p');
const solutionsContainer = document.querySelector('.solutions-container');
const soundItems = document.querySelectorAll('.sound-items');
const wohoSound = new Audio('wo.mp3');
const clickSound = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

//array for the feelings
const feelings = [
  'sad',
  'depressed',
  'exhausted',
  'euforic',
  'excited',
  'chaotic',
  'nervous',
  'dumb',
  'self-aware',
  'self-loathing',
  'angry',
  'isolated',
];

// array for the solutions
const solutions = [
  'do a handstand',
  'eat peas',
  'jump for 10 hours',
  'loading.....',
  'give your phone a bath',
  'error',
  'we dont know',
  '404 not found',
  'backflip, maybe?',
];

//first button on the page, choose random index from feelings-array to loop feelings
buttonFirst.addEventListener('click', () => {
  // play a sound from the const clickSound
  clickSound.play();
  const random = Math.floor(Math.random() * feelings.length);
  for (i = 0; i < feelings.length; i++) {
    // if i matches the value of random, append the paragraph into the div feelingsContainer
    if (i === random) {
      paragraph.innerHTML = feelings[random];
      feelingsContainer.appendChild(paragraph);
    }
  }
});

//second button on the page, choose random index from solutions-array to loop solutions
buttonSecond.addEventListener('click', () => {
  // play a sound from the const clickSound
  clickSound.play();
  const random = Math.floor(Math.random() * solutions.length);
  // if i matches the value of random, append the paragraph into the div feelingsContainer
  for (i = 0; i < solutions.length; i++) {
    if (i == random) {
      paragraph.innerHTML = solutions[random];
      solutionsContainer.appendChild(paragraph);
    }
  }
});

// when you hover over a svg, play the sound
soundItems.forEach((sounditem) => {
  sounditem.addEventListener('mouseover', () => {
    wohoSound.play();
  });
});
