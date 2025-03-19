function StopWatch() {
  let isRunning, startTime, endTime, duration;
  this.start = function () {
    if (isRunning) {
      throw new Error("Timer already started");
    }
    isRunning = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!isRunning) {
      throw new Error("Timer not started");
    }
    isRunning = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });

  this.reset = function () {
    this.duration = 0;
  };
}
