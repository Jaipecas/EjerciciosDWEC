function generateId(number, idLenght) {
    let numberLength = number.toString().length;
    let zeros = '0'.repeat(idLenght - numberLength);
    return zeros + number;
}

function createIdGenerator(idLenght, genId) {
    let i = 1;
    return () => {
        let id = genId(i, idLenght);
        i++;
        return id;
    }
}

module.exports = {
    generateId,
    createIdGenerator
}