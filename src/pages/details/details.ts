import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Birthday } from '../../models/birthday';
import { BirthdayStore } from '../../stores/birthday.store';

@Component({
    selector: 'page-details',
    templateUrl: 'details.html',
})
export class DetailsPage {

    public birthday: Birthday = new Birthday();
    public isNew: boolean;
    public action: string;

    constructor(public navCtrl: NavController,
        public viewCtrl: ViewController,
        public navParams: NavParams,
        public store: BirthdayStore) {
    }

    ionViewWillEnter() {
        let selectedBirthday = this.navParams.get('birthday');

        if (selectedBirthday) {
            this.birthday = Object.assign(new Birthday(), selectedBirthday);
            this.isNew = false;
            this.action = 'Edit';
        }
        else {
            this.isNew = true;
            this.action = 'Add';
        }
    }

    save() {
        if (this.isNew) {
            this.store.addBirthday(this.birthday);
        }
        else {
            this.store.updateBirthday(this.birthday);
        }

        this.dismiss();
    }

    delete() {
        this.store.deleteBirthday(this.birthday);
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss(this.birthday);
    }
}