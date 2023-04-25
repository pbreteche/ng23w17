import { Component, EventEmitter, Output } from '@angular/core';
import { contacts } from 'src/fixtures/contacts';
import { Contact } from 'src/types/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  contacts: Contact[] = contacts;
  @Output()
  onSelect: EventEmitter<Contact> = new EventEmitter();

  select(contact: Contact): void {
    this.onSelect.emit(contact);
  }
}
