const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('result', (result) => {
    console.log(result)
})

myEmitter.on('add', (a, b) => {
    myEmitter.emit('result', a + b)
})

myEmitter.on('multiply', (a, b) => {
    myEmitter.emit('result', a * b)
})

const firstNum = Number(process.argv[2])
const secondNum = Number(process.argv[3])
const operation = process.argv[4]

if (isNaN(firstNum) || isNaN(secondNum) || !['multiply', 'add'].includes(operation)) {
    console.log('Invalid operation')
} else {
    myEmitter.emit(operation, firstNum, secondNum)
}
