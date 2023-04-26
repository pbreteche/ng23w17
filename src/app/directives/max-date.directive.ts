import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Validators } from '../app.validators';

/*
  clé providers : permet de configurer l'injecteur de dépendance
  chaque provider fournit un service
  qui doivent déclarer :
   - une identification (provide)
   - comment se procurer l'instance
   - optionnellement, une identification peut être une collection de services
*/
@Directive({
  selector: '[appMaxDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDateDirective, multi: true}]
})
export class MaxDateDirective implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return Validators.maxDate(control);    
  }
}
