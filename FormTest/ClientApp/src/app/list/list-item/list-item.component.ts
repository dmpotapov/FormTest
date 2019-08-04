import { Component, Input } from '@angular/core';
import { User } from 'src/app/model/user';
import { Country } from 'src/app/model/country';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
/** list-item component*/
export class ListItemComponent {
    @Input() item: User;
    @Input() countriesDict: Array<Country>;

    constructor() {

    }
}
