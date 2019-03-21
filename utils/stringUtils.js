const sentenceBoundaryDetection = require('sbd')

function removeBlankLines(text) {
    const allLines = text.split('\n')

    const withoutBlankLines = allLines.filter((line) => {
        if (line.trim().length === 0)
            return false

        return true
    })

    return withoutBlankLines
}

function removeMarkdown(lines) {
    const withoutMarkdown = lines.filter((line) => {
        if (line.trim().startsWith('=')) 
            return false
        
        return true
    })

    return withoutMarkdown
}

function removeDatesInParenteses(text) {
    return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, '').replace(/ /g, ' ')
}

async function breakContentIntoSentences(text) {
    return await sentenceBoundaryDetection.sentences(text)
}

module.exports = { 
    removeBlankLines, 
    removeMarkdown,
    removeDatesInParenteses,
    breakContentIntoSentences
}