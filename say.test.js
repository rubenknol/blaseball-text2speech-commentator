const Say = require('./say');

const internals = {
  async run() {

    console.debug('Running with empty arguments');
    await Say();

    console.debug('Running a normal string');
    await Say('The commissioner is doing a great job!');

    console.debug('Running a string with quotes');
    await Say('The commissioner "is" doing \'a\' great job!');

    console.debug('Running a string with unpaired quotes');
    await Say('The commissioner it\'s doing a" great job!');
  }
};

internals.run();
