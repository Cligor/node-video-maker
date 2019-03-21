const algorithmia = require('algorithmia')

async function robot(content) {
    const wikipediaContent = await fetchContentFromWikipedia(content)

    const wikipediaContentSanitized = await sanitizeContent(wikipediaContent)

    return wikipediaContentSanitized
}

async function fetchContentFromWikipedia(content) {
    const algorithmiaAuthenticated = algorithmia('simKfjtqw8RVQocLkFW0YWHF/TQ1')
    const wikipediaAlgorithm = await algorithmiaAuthenticated.algo('web/WikipediaParser/0.1.2')
    const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
    const wikipediaContent = await wikipediaResponse.get()

    return wikipediaContent.content
}

async function sanitizeContent(content) {
    const sanitizeText = await removeBlankLines(content)
    const sanitezeMarkdownText = await removeMarkdown(sanitizeText).join(' ')

    return removeDatesInParenteses(sanitezeMarkdownText)
}

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

module.exports = robot

