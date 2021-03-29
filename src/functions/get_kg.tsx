const getKg = (): Array<number> => {
    var i = 30
    var kgArray = []
    while (i <= 150) {
        kgArray.push(i++);
    }
    return kgArray
}

export default getKg