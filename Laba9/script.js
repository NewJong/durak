let userPhotos = [
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  'jack.png',
  'queen.png',
  'king.png',
  'tuz.png',
];
let computerPhotos = [
  '6.png',
  '7.png',
  '8.png',
  '9.png',
  '10.png',
  'jack.png',
  'queen.png',
  'king.png',
  'tuz.png',
];

let cardValues = [6, 7, 8, 9, 10, 2, 3, 4, 11];

let userName = prompt("Please, enter your name:");
if (userName === null || userName === "") {
  userName = "User";
}

document.querySelector("#user h2").textContent = userName;

let startGameButton = document.querySelector("#startGame");

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getRandomPhoto(photosArray) {
  const randomIndex = Math.floor(Math.random() * photosArray.length);
  return photosArray[randomIndex];
}

startGameButton.addEventListener("click", () => {
  let userResult = document.querySelector('.resultUser');
  let computerResult = document.querySelector('.resultComputer');

  let userRandomPhoto = getRandomPhoto(userPhotos);
  let computerRandomPhoto = getRandomPhoto(computerPhotos);

  userResult.style.backgroundImage = `url('${userRandomPhoto}')`;
  computerResult.style.backgroundImage = `url('${computerRandomPhoto}')`;

  userResult.style.transform = 'scale(0)';
  computerResult.style.transform = 'scale(0)';

  userResult.offsetWidth;
  computerResult.offsetWidth;

  userResult.style.transform = 'scale(1)';
  computerResult.style.transform = 'scale(1)';
  
  let userCardValue = cardValues[userPhotos.indexOf(userRandomPhoto)];
  let computerCardValue = cardValues[computerPhotos.indexOf(computerRandomPhoto)];

  userScore += userCardValue;
  computerScore += computerCardValue;

  document.querySelector('#user .score').textContent = userScore;
  document.querySelector('#computer .score').textContent = computerScore;

  roundsPlayed++;

  if (roundsPlayed === 3) {
      let resultMessage = "";
      if (userScore > computerScore) {
        resultMessage = `${userName} won the game!`;
      } else if (userScore < computerScore) {
        resultMessage = "Computer won the game!";
      } else {
        resultMessage = "Game ended in a draw!";
      }

      setTimeout(() => { alert(resultMessage);

    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;

    document.querySelector('#user .score').textContent = userScore;
    document.querySelector('#computer .score').textContent = computerScore;
    userResult.style.backgroundImage = 'none';
    computerResult.style.backgroundImage = 'none';
  },100);
}
});
