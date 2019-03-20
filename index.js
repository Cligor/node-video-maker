const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()

    console.log(content)
}

function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
}

start()