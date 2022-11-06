const choice = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
}

const remove = (items, item) => {
    let index = items.indexOf(item)
    if (index > -1) {
        return items.splice(index, 1);
    } else {
        return undefined
    }
}

export { choice, remove }