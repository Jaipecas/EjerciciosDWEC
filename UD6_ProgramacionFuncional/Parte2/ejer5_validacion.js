
const filterDirection = directions => directions.filter(direction => direction.pais !== '' && direction.ciudad !== '' && direction.direccion !== '');
const filterPhone = directions => directions.filter(direction => direction.movil !== '' || direction.fijo !== '');
const filterRegion = directions => directions.filter(direction => direction.region !== '' || direction.cp !== '');

const filterDirections = directions => filterDirection(filterPhone(filterRegion(directions)))


module.exports = {
    filterDirections
}