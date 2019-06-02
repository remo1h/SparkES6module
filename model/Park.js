import GradskiElement from './GradskiElement';

class Park extends GradskiElement {
    constructor(naziv, godina, povrsina, drvece) {
        super(naziv, godina);
        this.povrsina = povrsina;
        this.drvece = drvece;
        this.gustoca = (this.drvece / this.povrsina).toFixed(2);
    }
    info() {
        console.log(this.naziv + '    ' + this.godina + '    ' + this.povrsina + ' km2     ' + this.drvece +
            '           ' + this.gustoca);
    }
}
export default Park;