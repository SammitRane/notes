const chalk=require('chalk')
const yargs=require('yargs')
const getNotes = require('./notes.js')
//Changing
//Customize yargs version
yargs.version('1.1.0')   


//Create add Command
yargs.command({
    command:'add',
    describe:'Adds a new note',
    handler: function(){ 
        console.log('Adding a new note!')
    }
        
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Removes a note',
    handler: function(){ 
        console.log('Removing a note!')
    }
        
})

//Create Read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    handler: function(){ 
        console.log('Reading a note!')
    }
        
})

//Create list command
yargs.command({
    command:'list',
    describe:'Lists all notes',
    handler: function(){ 
        console.log('Listing the notes!')
    }
        
})
console.log(yargs.argv)
//add,remove, read list
