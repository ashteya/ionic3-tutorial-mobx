import { Component, ChangeDetectionStrategy } from "@angular/core";  
import { ModalController, NavController } from 'ionic-angular';  

import { Birthday } from '../../models/birthday';  
import { BirthdayStore } from '../../stores/birthday.store';
import { DetailsPage } from '../details/details';  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {  
    public today = new Date();

    constructor(
        public nav: NavController,
        public modalCtrl: ModalController,
        public store: BirthdayStore) {
    }

    showDetail(birthday: Birthday) {  
        let modal = this.modalCtrl.create(DetailsPage, { birthday: birthday });
        modal.present();
    }
}