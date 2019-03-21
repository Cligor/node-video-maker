const input = require('./input/input')

const robots = {
    text: require('./robots/text')
}

async function start() {
    const content = input()

    content.sourceContentSanitize = await robots.text(content)
}

start()

