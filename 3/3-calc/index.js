const { multiply } = require('./multiply');
const { add } = require('./add');


const firstNum = Number(process.argv[2])
const secondNum = Number(process.argv[3])
const operation = process.argv[4]

let result

if (isNaN(firstNum) || isNaN(secondNum) || !['multiply', 'add'].includes(operation)) {
    console.log('Invalid operation')
} else {
    if(operation === 'multiply') {
        result = multiply(firstNum, secondNum)
    } else if (operation === 'add') {
        result = add(firstNum, secondNum)
    }
    console.log(result)
}
