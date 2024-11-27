const  { parentPort, workerData } = require('worker_threads');

const workerResult = ({array}) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = result + (array[i]%3 === 0 ? 1 : 0)
    }
    return result
}

parentPort.postMessage(workerResult(workerData))
