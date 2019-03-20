const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
}

function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
}

function askAndReturnPrefix() {
    const prefixes = ['What is', 'Who is', 'The history of']

    const selectedPredixIndex = readline.keyInSelect(prefixes)

    return prefixes[selectedPredixIndex]
}

start()
