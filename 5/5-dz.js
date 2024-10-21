import { linearResult } from "./linear";
performance
const array = []

for (let i = 0; i < 300000; i++) {
    array.push(i+1)
}

const linearProcess = () => {
    const result = linearResult(array)
    console.log('linear result:', result)
}

const main = () => {
    linearProcess()
}

main()
