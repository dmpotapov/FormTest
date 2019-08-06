import { Component, Input } from '@angular/core';
import { User } from '../../model/user';
import { Country } from '../../model/country';

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
