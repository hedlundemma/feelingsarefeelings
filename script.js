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
];

// array for the solutions
const solutions = [
  'do a handstand',
  'wash cotton candy',
  'jump for 10 hours',
  'loading.....',
  'wash your headphones',
  'buy a cool shirt',
  'error error error',
  'we dont know',
  'backflip',
];

// event-listener for the first button , choose random index from feelings-array, append paragraph that i created into feelings-container and play a little sound
buttonFirst.addEventListener('click', () => {
  clickSound.play();
  const random = Math.floor(Math.random() * feelings.length);

  for (i = 0; i < feelings.length; i++) {
    if (i == random) {
      paragraph.innerHTML = feelings[random];
      feelingsContainer.appendChild(paragraph);
    }
  }
});

// event-listener for second button, choose random index from solutions-array, append paragraph that i created into solutions-container and play a little sound
buttonSecond.addEventListener('click', () => {
  clickSound.play();
  const random = Math.floor(Math.random() * solutions.length);

  for (i = 0; i < solutions.length; i++) {
    if (i == random) {
      paragraph.innerHTML = solutions[random];
      solutionsContainer.appendChild(paragraph);
    }
  }
});

// when you click on a elemnent thats a sounditem, play the sound
soundItems.forEach((sounditem) => {
  sounditem.addEventListener('mouseover', () => {
    wohoSound.play();
  });
});
