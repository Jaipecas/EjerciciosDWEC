const MINIMUM = 15;

const sumValues = values => values.reduce((element, acumulado) => element + acumulado);
const maxValue = value => Math.max(value, MINIMUM);
const getArray = value => [value];

const mergeValues = data => getArray(maxValue(sumValues(data), MINIMUM));

module.exports = {
    mergeValues
}