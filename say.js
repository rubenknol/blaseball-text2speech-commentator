const { promisify } = require('util');
const Exec = promisify(require('child_process').exec);

const internals = {
  kCommand: 'say'
}

// Takes a message as a string. Says it out loud.

module.exports = async function say(message='') {

  await Exec(`${internals.kCommand} '${message}'`);
}
