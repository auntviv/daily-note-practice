const notes = [
    {
        id: 1,
        subject: "Arrays",
        date: "10/01/2021",
        feeling: "Confused",
        timeSpent: 524


    },
    {
        id: 2,
        subject: "Intergers",
        date: "09/28/2021",
        feeling: "Anxious",
        timeSpent: 89
    }
]

const noteAboutToday = {
        id: 3,
        subject: "Objects",
        date: "07/10/2021",
        feeling: "Nervous",
        timeSpent: 251

}
notes.push(noteAboutToday)



// console.log(notes)

// for (const note of notes) {
//     console.log(` Note ${note.id}
//     ${note.date}
//     I learned Javascript ${note.subject}.
//     I spent ${note.timeSpent}
//     I felt ${note.feeling}.
//     `)
// }
// const noteToFind = "Nervous"

// for (const note of notes) {
//     if (note.feeling === noteToFind) {
//         console.log(`This note made you feel ${note.feeling}`)

//     }
// }

const createNote = (note, item) => {
    const lastIndex = note.length - 1
    const currentLastItem = note[lastIndex]
    const maxId = currentLastItem.id
    const idForNewItem = maxId + 1

    item.id = idForNewItem
    note.push(item)
    /*
        Your code for adding `id` property to note object
     */

}

// Create a new note object
const moreNewerNote = {

        subject: "String",
        date: "03/11/2021",
        feeling: "Trying",
        timeSpent: 160

}

// Specify object as argument for function
//         |
//         |
//         V
createNote(notes, moreNewerNote) // invoking create note and passing it two arg.
// invoking this function to append an object to the end of an array

console.log(notes)

const foot = [ "bear", "tea"]

const numberArray = [ 17, 4, 324]