class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    if (callback){
      this.intervalId = setInterval(() => {callback},1000);
      }
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }


  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
  let seconds = this.currentTime % 60;
  return seconds;
  }

  computeTwoDigitNumber(value) {
    if(value < 10){
    let result = `0${value}`;
    return result;
  }
  let result = value.toString();
  return result;
}

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
   
  }
  
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
