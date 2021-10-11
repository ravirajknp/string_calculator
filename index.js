function add(stringNumber) {

    if (!stringNumber.length) return 0;

    const numbers = stringNumber.split(/[\n,;/]+/);
    const filteredNumbers = numbers.filter(number => parseInt(number) >= 0 && !isNaN(number))
    return filteredNumbers.reduce((preValue, curValue) => parseInt(preValue) + parseInt(curValue))
}

add("1\n2,3");