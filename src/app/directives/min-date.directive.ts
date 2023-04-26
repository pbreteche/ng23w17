import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from '../app.validators';

@Directive({
  selector: '[appMinDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective, multi: true}]
})
export class MinDateDirective implements Validator {
  @Input('appMinDate')
  min: Date|string = '';

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return Validators.minDate(this.min)(control);
  }
}
