const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
//Customize yargs version
yargs.version('1.1.0')


//Create add Command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }

})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

//Create Read command
yargs.command({
    command: 'read',
    describe: 'Reads a note',
    handler: function () {
        console.log('Reading a note!')
    }

})

//Create list command
yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: function () {
        console.log('Listing the notes!')
    }

})

yargs.parse()
//add,remove, read list
