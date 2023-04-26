import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from 'src/types/contact';

@Component({
  selector: 'app-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent {
  @Output()
  onSelect: EventEmitter<Contact> = new EventEmitter();
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
  });

  constructor(
    public contactList: ContactListService
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
    this.contactList.contacts.push(contact);
    this.onSelect.emit(contact);
    this.form.reset();
  }
}
