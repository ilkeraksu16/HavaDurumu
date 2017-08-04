import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  sehir:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalcont:ModalController) {
  this.GetDefault();
  }

  GetDefault(){
    if(localStorage.getItem('sehir') != null){
      this.sehir = localStorage.getItem('sehir');
    } else {
      this.sehir = 'istanbul';
    }
  }

  SetSehir(){
    localStorage.setItem('sehir',this.sehir);
    let profileModal = this.modalcont.create(HomePage,);
    profileModal.present();
  }
}
