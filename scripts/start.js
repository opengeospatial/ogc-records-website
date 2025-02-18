const concurrently = require('concurrently');
const upath = require('upath');

const liveServerCommand = 'npx live-server dist --verbose --port=3000';

concurrently([
    { command: 'node scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
    { 
        command: liveServerCommand,
        name: 'SB_LIVE_SERVER', 
        prefixColor: 'bgGreen.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}
