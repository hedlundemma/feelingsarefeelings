const buttonFirst = document.querySelector('.btn-1');
const buttonSecond = document.querySelector('.btn-2');
const heading = document.querySelector('h1');
const feelingsContainer = document.querySelector('.feelings-container');
const paragraph = document.createElement('p');
const solutionsContainer = document.querySelector('.reveal-container');

// Change text color on mouseover
buttonFirst.addEventListener('mouseover', function () {
  buttonFirst.style.color = '#4080c6';
});

// Change text color back on mouseout
buttonFirst.addEventListener('mouseout', function () {
  buttonFirst.style.color = 'white';
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
  'go outside and lay on the ground for 15 minutes',
  'you are good as you are',
  'eat some candy',
  'hug your cat',
  'scream in a pillow and eat some icecream honey',
  'you need to get laid',
  'you have a strong need to get some sleep dude',
  'better drink some water and do some stretches',
  'we dont know. honesly. better luck on your own',
];

// event-listener for första knappen, choose random index from feelings-array, append paragraph that i created into feelings-container

buttonFirst.addEventListener('click', () => {
  const random = Math.floor(Math.random() * feelings.length);

  for (i = 0; i < feelings.length; i++) {
    if (i == random) {
      paragraph.innerHTML = feelings[random];
      feelingsContainer.appendChild(paragraph);
    }
  }
});

buttonSecond.addEventListener('click', () => {
  const random = Math.floor(Math.random() * solutions.length);

  for (i = 0; i < solutions.length; i++) {
    if (i == random) {
      paragraph.innerHTML = solutions[random];
      solutionsContainer.appendChild(paragraph);
    }
  }
});

// Loop through array of pictures, start at 0 if the array is over, button for sad pictures
// let currentSadPictures = 0;
// buttonFirst.addEventListener('click', () => {
//   imageContainer.src = sadPictures[currentSadPictures];

//   currentSadPictures++;

//   if (currentSadPictures > sadPictures.length - 1) {
//     currentSadPictures = 0;
//   }
// });

// Loop through array of pictures, start at 0 if the array is over, button for happy pictures
// let currentHappyPictures = 0;
// buttonSecond.addEventListener('click', () => {
//   imageContainer.src = happyPictures[currentHappyPictures];

//   currentHappyPictures++;

//   if (currentHappyPictures > happyPictures.length - 1) {
//     currentHappyPictures = 0;
//   }
// });

// array of feelings for mouseover-effect on h1
