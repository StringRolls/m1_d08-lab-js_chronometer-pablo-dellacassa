class Chronometer {
  constructor() {
    urrentTime = 0;
    intervalidId = null;
  }

  start() {
    // ... your code goes here
    this.intervalidId = setInterval(() => {
      this.currentTime += 1;
    }, 1000)
  }

  getMinutes() {
    // ... your code goes here
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    let seconds = (this.currentTime % 60);
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10){
      return '0' + String(value)
    }else{
      return value.toString();
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalidId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}




