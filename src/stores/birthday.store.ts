import { observable, action, computed } from 'mobx-angular';
import { Injectable } from "@angular/core";
import { Birthday } from '../models/birthday';
import { UUID } from 'angular2-uuid';

@Injectable()
export class BirthdayStore {
    @observable birthdays: Birthday[] = [];

    @computed get birthdaysToday() {
    let today = new Date();

    return this.birthdays
        .filter(b => b.parsedDate.getMonth() == today.getMonth() &&
                        b.parsedDate.getDate() == today.getDate())
        .map(b => ({
            name: b.name,
            age: today.getFullYear() - b.parsedDate.getFullYear()
        }));
    }

    @action addBirthday(birthday: Birthday) {
        birthday.id = UUID.UUID();
        this.birthdays.push(birthday);
    }

    @action deleteBirthday(birthday: Birthday) {
        let index = this.birthdays.findIndex(b => b.id == birthday.id);
        this.birthdays.splice(index, 1);
    }

    @action updateBirthday(birthday: Birthday) {
        let index = this.birthdays.findIndex(b => b.id == birthday.id);
        this.birthdays[index] = birthday;
    }
}