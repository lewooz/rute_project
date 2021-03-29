const getYears = (startYear: number): Array<number> => {
    var currentYear = new Date().getFullYear()
    var years = []
    while (startYear <= currentYear) {
        years.push(startYear++);
    }
    return years
}

export default getYears