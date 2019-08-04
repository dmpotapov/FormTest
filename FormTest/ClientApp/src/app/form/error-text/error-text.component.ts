import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-error-text',
    templateUrl: './error-text.component.html',
    styleUrls: ['./error-text.component.scss']
})
/** error-text component*/
export class ErrorTextComponent {
    @Input() form: FormGroup;
    @Input() field: string;
    @Input() errorKey: string;
    @Input() text: string;
    /** error-text ctor */
    constructor() {

    }

    touchedAndHasError(control: AbstractControl, errorKey: string) {
        return control.touched && control.errors && control.errors[errorKey];
    }
}
