import { ValidationErrors, ValidatorFn, AbstractControl } from "@angular/forms";

export class CustomValidators {
    /* checks if input part matches regex passed */
    static containsPattern(pattern: RegExp, errorKey: string = "containsPattern"): ValidatorFn {
        return function (control: AbstractControl): ValidationErrors | null {
            if (!control.value) {
                return null;
            }
            let res: ValidationErrors = null;

            if (!pattern.test(control.value)) {
                res = {};
                res[errorKey] = true;
            }

            return res;
        }
    }
}
