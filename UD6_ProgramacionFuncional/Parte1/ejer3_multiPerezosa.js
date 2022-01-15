function lazyMultiply(a, b) {
    let result;
    if (b !== undefined) {
        result = a * b;
    } else {
        result = (operator2) => a * operator2;
    }
    return result;
}

module.exports = {
    lazyMultiply
}