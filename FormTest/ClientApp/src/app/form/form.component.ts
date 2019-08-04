import { Component, ViewChild } from '@angular/core';
import { User } from '../model/user';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../helpers/custom-validators';
import { DictionaryDataService } from '../services/dictionary-data.service';
import { Country } from '../model/country';
import { ApiService } from '../services/api.service';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

/** form component*/
export class FormComponent {
    @ViewChild("successfulRegister") successfulRegister: SwalComponent;

    user: User = new User();
    userForm: FormGroup = this.fb.group({
        firstName: this.fb.control(this.user.firstName, Validators.required),
        lastName: this.fb.control(this.user.lastName, Validators.required),
        email: this.fb.control(this.user.email, [
            Validators.required,
            Validators.email
        ]),
        password: this.fb.control(this.user.password, [
            Validators.required,
            Validators.minLength(8),
            CustomValidators.containsPattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/)
        ]),
        countryId: this.fb.control(this.user.countryId, Validators.required),
        gender: this.fb.control(this.user.gender, Validators.required),
        receiveNotifications: this.fb.control(this.user.receiveNotifications, Validators.required)
    })

    countriesDict: Array<Country> = this.dictionaryData.getCountries();

    /** form ctor */
    constructor(private fb: FormBuilder,
                private dictionaryData: DictionaryDataService,
                private apiService: ApiService,
                private router: Router) {
        
    }

    register() {
        this.apiService.submitForm(<User>this.userForm.value).subscribe(u => {
            this.successfulRegister.show();
            this.router.navigateByUrl("/");
        });
    }
}
