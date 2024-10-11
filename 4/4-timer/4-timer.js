const firstTimeItem = process.argv[2]
const secondTimeItem = process.argv[3]
const thirdTimeItem = process.argv[4]

let hours = 0
let minutes = 0
let seconds = 0

if (firstTimeItem.includes('h')) {
    hours = Number(firstTimeItem.split('h')[0])
}

if(secondTimeItem && secondTimeItem.includes('m')){
    minutes = Number(secondTimeItem.split('m')[0])
}

if(thirdTimeItem && thirdTimeItem.includes('s')){
    seconds = Number(thirdTimeItem.split('s')[0])
}

if (firstTimeItem.includes('m')) {
    minutes = Number(firstTimeItem.split('m')[0])
}

if(secondTimeItem && secondTimeItem.includes('s')){
    seconds = Number(secondTimeItem.split('s')[0])
}

if (firstTimeItem.includes('s')) {
    seconds = Number(firstTimeItem.split('s')[0])
}

const time = (seconds + (minutes * 60) + (hours * 60 * 60)) * 1000
setTimeout(() => {
    console.log(`The time is ${hours} hours, ${minutes} minutes and ${seconds} seconds`)
}, time)
