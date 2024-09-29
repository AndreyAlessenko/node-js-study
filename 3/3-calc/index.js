const { multiply } = require('./multiply');
const { add } = require('./add');


const firstNum = process.argv[2]
const secondNum = process.argv[3]
const operation = process.argv[4]

let func = ''

if(operation === 'multiply') {
    func = multiply
} else if (operation === 'add') {
    func = add
} else {
    func = () => {
        console.log('Invalid operation')
    }
}


console.log(func(firstNum, secondNum))
