// process.stdout.write('\x07');


// process.argv


const argv = process.argv.slice(2).filter(time => !isNaN(time) && time > 0);

argv.forEach((time) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, time * 1000);
});