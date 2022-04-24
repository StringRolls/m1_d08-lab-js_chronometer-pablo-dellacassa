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
  minDecElement.innerText = chronometer.getMinutes()[0]
  minUniElement.innerText = chronometer.getMinutes()[1]
  secDecElement.innerText = chronometer.getSeconds()[0]
  secUniElement.innerText = chronometer.getSeconds()[1]
}

function printMinutes() {
  // ... your code goes here
  
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
  newSplit = document.createElement("li")
  newSplit.innerText = chronometer.split()
  splitsElement.appendChild(newSplit)
}

function clearSplits() {
  // ... your code goes here
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
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
});
