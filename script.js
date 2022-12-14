const buttonFirst = document.querySelector('.btn-1');
const buttonSecond = document.querySelector('.btn-2');
const heading = document.querySelector('h1');
const feelingsContainer = document.querySelector('.feelings-container');
const paragraph = document.createElement('p');
const solutionsContainer = document.querySelector('.solutions-container');
const soundItems = document.querySelectorAll('.sound-items');
const blurryParagraph = document.querySelector('.blurry-paragraph');
const wohoSound = new Audio('sounds/wo.mp3');
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
  'solo thumb-war',
  'jump for 78 hours',
  'loading.....',
  'google it',
  'try again later',
  'use tablets as swords',
  '404 not found',
  'backflip, maybe?',
  'kiss a bee',
];

//first button on the page, choose random index from feelings-array to loop feelings
buttonFirst.addEventListener('click', () => {
  // play a sound from the const clickSound
  clickSound.play();
  // choose a random value from the array feelings
  const random = Math.floor(Math.random() * feelings.length);
  for (i = 0; i < feelings.length; i++) {
    paragraph.innerHTML = feelings[random];
    // add feelings from the array to the div feelingsContainer
    feelingsContainer.appendChild(paragraph);
  }
});

//second button on the page
buttonSecond.addEventListener('click', () => {
  // play a sound from the const clickSound
  clickSound.play();
  // choose a random value from the array solutions
  const random = Math.floor(Math.random() * solutions.length);
  for (i = 0; i < solutions.length; i++) {
    paragraph.innerHTML = solutions[random];
    //append the paragraph into the div solutionsContainer
    solutionsContainer.appendChild(paragraph);
  }
});

// when you move your mouse over a element with the class "sound-items", play the sound
soundItems.forEach((soundItem) => {
  soundItem.addEventListener('mouseover', () => {
    wohoSound.play();
  });
});

// make the paragraph under h1 not blurry when you click one it
blurryParagraph.addEventListener('click', () => {
  blurryParagraph.style.color = 'var(--black)';
  blurryParagraph.style.textShadow = 'none';
});
