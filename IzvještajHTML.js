let showData = (data) => {

    let table = document.getElementById('tabla'),
        table2 = document.getElementById('tabla2');

    if (data.parkovi) {
        let tr = '<tr>';
        data.parkovi.forEach((e) => {
            tr += "<td>" + e.naziv + "</td>";
            tr += "<td>" + e.godina + "</td>";
            tr += '<td>' + e.povrsina + '</td>';
            tr += '<td>' + e.drvece + '</td>';
            tr += '<td>' + e.gustoca + '</td></tr>';
            table.innerHTML = tr;
        });
    }
    if (data.ulice) {
        let tr = '<tr>';
        data.ulice.forEach((e) => {
            tr += "<td>" + e.naziv + "</td>";
            tr += "<td>" + e.godina + "</td>";
            tr += '<td>' + e.duzina + '</td>';
            tr += '<td>' + e.klasifikacija + '</td></tr>';
            table2.innerHTML = tr;
        });
    }
}

export {
    showData,
}