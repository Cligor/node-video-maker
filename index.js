const input = require('./input/input')
const breakContentIntoSentences = require('./utils/stringUtils').breakContentIntoSentences

const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = input()

    content.sourceContentSanitize = await robots.text(content)
    
    const sentences = await breakContentIntoSentences(content.sourceContentSanitize)

    content.sentences = []
    
    sentences.forEach(sentence => {
        content.sentences.push({
            text: sentence,
            keywords: [],
            images: []
        })
    })

    console.log(content.sentences)
}

start()

