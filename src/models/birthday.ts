import { observable, computed } from 'mobx-angular';

export class Birthday {  
    id: string;
    @observable name: string;
    @observable date: string;

    constructor() { }

    @computed get parsedDate(): Date {
        return new Date(this.date);
    }
}