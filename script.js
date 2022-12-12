const buttonFirst = document.querySelector('.btn-1');
const buttonSecond = document.querySelector('.btn-2');
const heading = document.querySelector('h1');
const feelingsContainer = document.querySelector('.feelings-container');
const paragraph = document.createElement('p');
const solutionsContainer = document.querySelector('.solutions-container');
const soundItems = document.querySelectorAll('.sound-items');
const music = new Audio('wo.mp3');

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
  'paint a dog',
  'lie down',
  'scream ',
  'cut your hair',
  'buy a cool shirt',
  'error error error',
  'we dont know',
  'backflip',
];

// event-listener for the first button , choose random index from feelings-array, append paragraph that i created into feelings-container
buttonFirst.addEventListener('click', () => {
  const random = Math.floor(Math.random() * feelings.length);

  for (i = 0; i < feelings.length; i++) {
    if (i == random) {
      paragraph.innerHTML = feelings[random];
      feelingsContainer.appendChild(paragraph);
    }
  }
});

// event-listener for second button, choose random index from solutions-array, append paragraph that i created into solutions-container
buttonSecond.addEventListener('click', () => {
  const random = Math.floor(Math.random() * solutions.length);

  for (i = 0; i < solutions.length; i++) {
    if (i == random) {
      paragraph.innerHTML = solutions[random];
      solutionsContainer.appendChild(paragraph);
    }
  }
});

soundItems.forEach((sounditem) => {
  sounditem.addEventListener('click', () => {
    music.play();
  });
});

// const myTimeout = setTimeout(myGreeting, 5000);
