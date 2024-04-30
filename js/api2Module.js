import { Weatherapi } from "./apiModule.js";
import { weathersearh } from "./varsModule.js";


export class serachh {
    sseeaarrcchh() {
        let val = weathersearh.value;
        let search1 = new Weatherapi();
        search1.weatherSearch(val);
    }

    search2() {
        weathersearh.addEventListener('keyup', this.sseeaarrcchh)
    }

    geolocate() {
        navigator.geolocation.getCurrentPosition(function (pos) {
            let latitudee = pos.coords.latitude;
            let longitudee = pos.coords.longitude;
            let val = [latitudee, longitudee];
            let search1 = new Weatherapi();
            search1.weatherSearch(val);
        }, function (err) { 
            if(err.message == "User denied Geolocation"){
                let val = "cairo";
                let search1 = new Weatherapi();
                search1.weatherSearch(val);
            }
         })
    }
}