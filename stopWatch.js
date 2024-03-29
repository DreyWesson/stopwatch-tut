function StopWatch() {
  let startTime, endTime, running, duration = 0;
  this.start = function() {
      if (running) {
          throw new Error("Stopwatch already running")
      }else {
          running = true;
          startTime = new Date()
      }
  },
  this.stop = function() {
      if (!running) {
          throw new error("Time not running")
      } else {
          running = false;
          endTime = new Date();
          const newTime = (endTime.getTime() - startTime.getTime())/1000;
          duration += seconds;
      }
  },
  this.reset = function() {
      startTime = null;
      endTime = null;
      running = null;
      duration = 0;
  }
  Object.defineProperty(this, 'duration', {
      get() {
          return duration;
      }
  })
}
let stopWatch = new StopWatch()