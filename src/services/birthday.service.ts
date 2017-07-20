import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Birthday } from '../models/birthday';

@Injectable()
export class BirthdayService {

    private STORAGE_KEY = 'BIRTHDAYS';

    constructor (private storage: Storage) { }

    saveAll(birthdays: Birthday[]): Promise<any> {
        return this.storage.set(this.STORAGE_KEY, JSON.stringify(birthdays));
    }

    getAll(): Promise<Birthday[]> {
        return this.storage.ready()
            .then(() => this.storage.get(this.STORAGE_KEY))
            .then(data => {
                const birthdays = JSON.parse(data);

                if (birthdays) {
                    return birthdays.map(b => Object.assign(new Birthday(), b));
                }

                return [];
            })
    }
}