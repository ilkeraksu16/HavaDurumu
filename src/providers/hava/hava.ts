import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HavaProvider {
  url="http://api.openweathermap.org/data/2.5/weather?q=";
  apikey = "a6918126ee3100d811569210895f13d0";
  
  constructor(public http: Http) {
    console.log('Hello HavaProvider Provider');
  }

  GetHava(sehir){
    return this.http.get(this.url+sehir+'&APPID='+this.apikey+'&units=metric')
    .map(res => res.json());
  }
}
