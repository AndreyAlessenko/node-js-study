const { linearResult } = require("./linear");
const  { Worker } = require('worker_threads');
const { performance, PerformanceObserver } = require("perf_hooks");
const array = []
for (let i = 0; i < 300000; i++) {
    array.push(i+1)
}

const performanceObserver = new PerformanceObserver((items) => {
    items.getEntries().forEach(entry => {
        console.log(`${entry.name}: ${entry.duration}`)
    })
})

performanceObserver.observe({ entryTypes: ['measure'] })

const linearProcess = () => {
    performance.mark('linearStart')
    const result = linearResult({ array })
    console.log('linear result:', result)
    performance.mark('linearEnd')
    performance.measure('linear', 'linearStart', 'linearEnd')
}

const workerProcess = () => {
    return new Promise((resolve, reject) => {
        performance.mark('workerStart')
        const worker = new Worker('./worker.js', {
            workerData: {
                array
            }
        })

        worker.on('message', (msg) => {
            console.log('msg', msg)
            performance.mark('workerEnd')
            performance.measure('worker', 'workerStart', 'workerEnd')
            resolve(msg)
        })
        worker.on('error', (error) => {
            reject(error)
        })
    })
}

const main = () => {
    linearProcess()
    workerProcess()
}

main()
