const readline = require('readline-sync')

function input() {
    inputContent = {}

    inputContent.searchTerm = askAndReturnSearchTerm()
    inputContent.prefix     = askAndReturnPrefix()

    return inputContent
}

function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
}

function askAndReturnPrefix() {
    const prefixes = ['What is', 'Who is', 'The history of']

    const selectedPredixIndex = readline.keyInSelect(prefixes)

    return prefixes[selectedPredixIndex]
}

module.exports = input