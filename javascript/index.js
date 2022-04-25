const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
  setInterval(() => {
    const seconds = printSeconds();
    const minutes = printMinutes();

    minDecElement.innerText = minutes[0];
    minUniElement.innerText = minutes[1];
    secDecElement.innerText = seconds[0];
    secUniElement.innerText = seconds[1];
  }, 1000);
}

function printMinutes() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getMinutes());
}

function printSeconds() {
  // ... your code goes here
  return chronometer.computeTwoDigitNumber(chronometer.getSeconds());
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  const timeSplit = chronometer.split();
  const newSplit = document.createElement('li');
  newSplit.innerText = timeSplit;
  splitsElement.appendChild(newSplit);
}

function clearSplits() {
  // ... your code goes here
  splitsElement.removeChildren();
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
    btnLeftElement.classList.toggle('stop');
    btnRightElement.classList.toggle('split');
    btnRightElement.innerText = 'RESET';
  
    if (btnLeftElement.innerText === 'STOP') {
      btnLeftElement.innerText = 'START';
      chronometer.stop();
    } else {
      btnLeftElement.innerText = 'STOP';
      btnRightElement.innerText = 'SPLIT';
      chronometer.start(printTime);
    }
 });

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.innerText === 'SPLIT') {printSplit()}

  if (btnRightElement.innerText === 'RESET') {chronometer.reset()}
});
