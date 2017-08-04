import { Component,} from '@angular/core';
import { NavController, LoadingController} from 'ionic-angular';
import { HavaProvider } from '../../providers/hava/hava';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  sehir:string;
  item:any;
  durum:any;
  resim_adres:any;
  constructor(public navCtrl: NavController, private havaservis:HavaProvider,public loadingCtrl: LoadingController) {
    this.GetDefault();
    this.GetSehir();
  }

  GetSehir(){  
    this.havaservis.GetHava(this.sehir).subscribe(data => {
      let loader = this.loadingCtrl.create({
      content: "Lütfen bekleyin...",
      duration:1000
    });
    
      this.item = data;
      if(data.weather[0].main == "Clear"){
        this.durum="Açık";
        this.resim_adres = './assets/img/acik.jpg';
      }else if(data.weather[0].main == "Clouds"){
        this.durum="Bulutlu";
        this.resim_adres = './assets/img/bulutlu.jpg';
      }
     console.log(data);
     loader.setDuration(1);
     loader.present();
    });
  }
  GetDefault(){
    if(localStorage.getItem('sehir') != null){
      this.sehir = localStorage.getItem('sehir');
    } else {
      this.sehir = 'istanbul';
    }
  }
  NewPage(){
    this.navCtrl.push(SettingsPage);
  } 
}
