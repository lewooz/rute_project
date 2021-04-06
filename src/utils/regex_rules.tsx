const RegexRules = {
    NAME: /^[a-zA-ZıiİçÇşŞğĞÜüÖö\s]*$/,
    MAIL: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
}

export default RegexRules