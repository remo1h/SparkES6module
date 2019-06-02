const printParks = (parkovi = []) => {
    console.log("--------Parkovi----------");
    parkovi.forEach(e => e.info());
};

const printStreets = (ulice = []) => {
    console.log("--------Ulice----------");
    ulice.forEach(e => e.info());
};

export default {
    printParks,
    printStreets
};