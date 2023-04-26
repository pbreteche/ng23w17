import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';
import { CurrentContactService } from '../service/current-contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  constructor(
    public contactList: ContactListService,
    private currentContact: CurrentContactService
  ) {}

  select(contact: Contact): void {
    this.currentContact.set(contact);
  }
}
