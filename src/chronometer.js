class Chronometer {

  constructor() {
    this.currentTime = 0,
    this.intervalId = null  
  }                         

  start(printTimeCallback) {
    if (printTimeCallback) {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
        printTimeCallback();
      }, 1000);
    } else {
      this.intervalId = setInterval(() => {
        this.currentTime += 1;
      }, 1000);
    }
  //this.intervalId = setInterval(() = >)
  }


  getMinutes() {
    const minutes = this.currentTime / 60;
    const wholeNumber = Math.floor(minutes);
    return wholeNumber;
  // return Math.floor(this.currentTime/60)
  }


  getSeconds() {
    const seconds = this.currentTime % 60;
    return seconds;
    //return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    const stringValue = String(value);
    return value < 10 ? '0' + stringValue : stringValue;
    // if (value < 10 ) {
    //   return "0" + value.toString();
    // } else {
    //   return value.toString();
    // }
}

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();

    const stringMinutes = this.computeTwoDigitNumber(minutes);
    const stringSeconds = this.computeTwoDigitNumber(seconds);

    return stringMinutes + ':' + stringSeconds;

      }

    // - getMinutes()
    // - getSeconds()
    // - computeTwoDigitNumber(value)
    
}
