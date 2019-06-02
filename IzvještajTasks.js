const SortByTrees = (parkovi) => {
    console.log('Parkovi sortirani po broju drveća');
    parkovi.sort((a, b) => b.treesCount - a.treesCount);
    parkovi.forEach(e => console.log(e));
}
const SortBySize = (parkovi) => {
    console.log('Parkovi sortirani po veličini');
    parkovi.sort((a, b) => b.area - a.area);
    parkovi.forEach(e => console.log(e));
}
const Age = (parkovi) => {
    let ukupno = 0;
    parkovi.forEach(element => ukupno += (2019 - element.year));
    console.log('Prosjek starosti parkova: ' + (ukupno / parkovi.length).toFixed(2) + ' godina');
}
let ProsjecnaUkupnaDuzinaUlica = (ulice) => {
    let ukupno = 0;
    ulice.forEach(e => ukupno += e.streetLength);
    console.log('Ukupna dužina ulica: ' + ukupno.toFixed(2) + ' km2 a prosječna: ' +
        (ukupno / ulice.length).toFixed(2) + ' km2');
}
let Ulice80tih = (ulice) => {
    console.log('Ulice osamdesetih:');
    ulice.forEach((e) => {
        if (e.year >= 1980 && e.year < 1990)
            console.log(e)
    });

}
let Report = (data) => {
    if (data.parkovi) {
        SortByTrees(data.parkovi);
        SortBySize(data.parkovi);
        Age(data.parkovi);
    }
    if (data.ulice) {
        ProsjecnaUkupnaDuzinaUlica(data.ulice);
        Ulice80tih(data.ulice);
    }
}

export default Report;