const linearResult = ({ array }) => {
    let result = 0
    for (let i = 0; i < array.length; i++) {
        result = result + (array[i]%3 === 0 ? 1 : 0)
    }
    return result
}

module.exports = { linearResult }
