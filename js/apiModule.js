import { cardContent } from "./varsModule.js";

export class Weatherapi {
    weatherArr = [];
    weatherArr2 = [];
    weatherArr3 = [];
    weatherArr4 = [];

    async weatherSearch(val) {
        let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=01a401f05be64545a79191346241504&q=${val}&days=7`);
        let res1 = await res.json();
        this.weatherArr = res1.forecast.forecastday;
        this.weatherArr3 = res1.location.name;
        this.weatherCard1(this.weatherArr, this.weatherArr3)
        this.weatherArr.splice(0, 1);
        this.weatherArr4 = this.weatherArr;
        this.weatherCard2(this.weatherArr4);
    }

    weatherCard1(weatherArr, weatherArr3) {
        this.weatherArr2 = weatherArr;
        let date = new Date();
        let cards = "";
        for (let i = 0; i < this.weatherArr2.length; i++) {
            cards = `
            <div class="col-md-4"> 
            <div class="card-content1 mt-3  p-5">
                <div class="d-flex justify-content-between">
                    <span class="sp1">${date.toDateString().slice(0, 3)}</span>
                    <span class="sp2">${date.toDateString().slice(4,)}</span>
                </div>
                <div class="p-city mt-3">
                    <p>${weatherArr3}</p>
                </div>
                <div class="d-flex justify-content-between mt-5">
                    <p class="display-2">${this.weatherArr2[i].day.avgtemp_c}°C </p>
                    <img src="${this.weatherArr2[i].day.condition.icon}" alt="weatherstatus" title="weatherstatus" class="w-100 ms-4">
                </div>
                <div class="p-condition mt-5">
                    <p>${this.weatherArr2[i].day.condition.text}</p>
                </div>
                <div class="d-flex mt-2">
                    <span class="sp3"><i class="fa-solid fa-cloud-rain me-2"></i>${this.weatherArr2[i].day.daily_chance_of_rain}%</span>
                    <span class="sp4 ms-4"><i class="fa-solid fa-wind me-2"></i>${this.weatherArr2[i].day.maxwind_kph} km/hr </span>
                    <span class="sp5 ms-4"><i class="fa-solid fa-compass me-2"></i>${this.weatherArr2[i].hour[i].wind_dir} </span>
                </div>
            </div>
        </div> `
        }
        cardContent.innerHTML = cards;
    }

    weatherCard2(weatherArr4) {
        let cards2 = "";
        for (let i = 0; i < this.weatherArr4.length; i++) {
            cards2 += `
                            <div class="col-md-4">
                            <div class="card-content2 mt-3 text-center pb-5 pt-4">
                                <div>
                                    <span class="sp1 mt-5 pt-3">${this.weatherArr4[i].date}</span>
                                </div>
                                <div class="d-flex flex-column mt-5">
                                    <img src="${this.weatherArr4[i].day.condition.icon}" alt="weatherstatus" title="weatherstatus" class="w-25 m-auto mt-2 mb-3">
                                    <p>${this.weatherArr4[i].day.avgtemp_c}°C</p>
                                    <p>${this.weatherArr4[i].day.maxtemp_c}°C</p>
                                </div>
                                <div class="p-condition mt-5">
                                    <p>${this.weatherArr4[i].day.condition.text}</p>
                                </div>
                            </div>
                            </div> 
                `
        }
        cardContent.innerHTML += cards2;
    }
}