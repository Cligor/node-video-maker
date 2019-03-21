const algorithmia = require('algorithmia')
const stringUtils = require('../utils/stringUtils')

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
    const sanitizeText = await stringUtils.removeBlankLines(content)
    const sanitezeMarkdownText = await stringUtils.removeMarkdown(sanitizeText).join(' ')

    return stringUtils.removeDatesInParenteses(sanitezeMarkdownText)
}

module.exports = robot

