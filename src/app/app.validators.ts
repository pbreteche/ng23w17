import { AbstractControl, ValidationErrors } from "@angular/forms";

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
}
