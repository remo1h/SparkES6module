import GradskiElement from './GradskiElement';

let myMap = new Map();
myMap.set(1, 'prolaz');
myMap.set(2, 'mala');
myMap.set(3, 'normalna');
myMap.set(4, 'velika');

class Ulica extends GradskiElement {
    constructor(naziv, godina, duzina, klasifikacija) {
        super(naziv, godina);
        this.duzina = duzina;
        klasifikacija == null ?
            this.klasifikacija = myMap.get(3) : this.klasifikacija = myMap.get(klasifikacija);
    }
    info() {
        console.log(this.naziv + ' ' + this.godina + '  ' + this.duzina + ' km2 ' +
            this.klasifikacija);
    }
}

export default Ulica;