import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from 'src/types/contact';
import { Validators as AppValidators} from 'src/app/app.validators';
import { CurrentGroupService } from '../service/current-group.service';

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent {
  form = new FormGroup({
    firstName: new FormControl('', [
      Validators.required
    ]),
    lastName: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.email
    ]),
    birthday: new FormControl('', [
      AppValidators.maxDate,
      AppValidators.minDate('1900-01-01')
    ]),
  });

  constructor(
    public contactList: ContactListService,
    private current: CurrentGroupService
  ) {}

  get(controlName: string) {
    return this.form.get(controlName);
  }

  // possibilité de proposer un accès direct à un FormControl
  get firstName() {
    return this.form.get('firstName');
  }

  save() {
    const contact = this.form.value as Contact;
    this.contactList.push(this.current.slug!, contact);
    this.form.reset();
  }
}
