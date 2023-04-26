import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validators {
    static maxDate(form: AbstractControl): ValidationErrors | null {
        let value = form.value;
        if (!value) { 
            return null;
        }

        if (typeof value == 'string') {
            value = new Date(value);
        }

        const now  = new Date();

        if (value > now) {
            return { maxDate: {value: value} };
        }

        return null;
    }

    static minDate(min: Date|string): ValidatorFn {
        return function(form: AbstractControl): ValidationErrors | null {
            let value = form.value;
            if (!value) { 
                return null;
            }

            if (typeof value == 'string') {
                value = new Date(value);
            }

            if (typeof min == 'string') {
                min = new Date(min);
            }

            if (value < min) {
                return { minDate: {value: value, min: min} };
            }

            return null;
        }
    }
}
