const getBody = (): Array<number> => {
    var i = 18
    var bodyArray = []
    while (i <= 65) {
        bodyArray.push(i++);
    }
    return bodyArray
}

export default getBody