import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact: Contact = {};

  constructor(
    public contactList: ContactListService
  ) {}

  save() {
    //this.contactList.contacts.push(this.contact);
    this.contact = {};
  }
}
