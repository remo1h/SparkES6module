import { fetchData } from './apiService';
import parseData from './dataParse';
import obj from './dataInfo';
import { showData } from './IzvještajHTML';
import Report from './IzvještajTasks';

fetchData()
    .then(data => {
        const podaci = parseData(data);
        // prebaciti metode za ispis izvještaja u dataInfo modul i iz ove metode proslijeđivati podatke
        obj.printParks(podaci.parkovi);
        obj.printStreets(podaci.ulice);
        Report(data);
        //Bonus korak, napraviti modul koji će izvještaje i podatke ispisati u HTML, 
        //te takav projekat postviti na svoj github i podići na netlify demo stranicu. 
        showData(podaci);
    });