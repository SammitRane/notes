const fs = require('fs')
const chalk = require('chalk')
const getNotes = function () {
    return 'Your notes.....'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen.white.inverse.bold('New note added!'))
    }
    else {
        console.log(chalk.bgRed.white.inverse.bold('Note title taken!'))
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}
const loadNotes = function () {
    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []
    }
}
const removeNote = function (title) {
    console.log('The note ' + title + ' will be removed')
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length === notesToKeep.length) {
        console.log(chalk.bgRed.white.inverse.bold('No note deleted!'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.bgGreen.white.inverse.bold('Note deleted!'))
    }


}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}