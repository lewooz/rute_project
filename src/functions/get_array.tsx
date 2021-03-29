const getArray = (startNumber: number, endNumber: number): Array<number> => {
    var i = startNumber
    var array = []
    while (i <= endNumber) {
        array.push(i++);
    }
    return array
}

export default getArray