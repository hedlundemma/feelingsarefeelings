const buttonFirst = document.querySelector('.btn-1');
const buttonSecond = document.querySelector('.btn-2');
const heading = document.querySelector('h1');
const feelingsContainer = document.querySelector('.feelings-container');
const paragraph = document.createElement('p');
const solutionsContainer = document.querySelector('.solutions-container');

// Change text color on mouseover on first button
buttonFirst.addEventListener('mouseover', function () {
  buttonFirst.style.color = '#50ccfa';
});

// Change text color back on mouseout
buttonFirst.addEventListener('mouseout', function () {
  buttonFirst.style.color = '#ffffff';
});

buttonSecond.addEventListener('mouseover', function () {
  buttonSecond.style.color = '#181d1c';
});

// Change text color back on mouseout
buttonSecond.addEventListener('mouseout', function () {
  buttonSecond.style.color = '#ffffff';
});

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
  'put your pants on backwards',
  'scream in a pillow and eat some icecream honey',
  'cut your hair',
  'buy a cool shirt, maybe with some raindeers on',
  'error error error',
  'we dont know. honestly. better luck on your own',
  '¯_(ツ)_/¯ ',
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
