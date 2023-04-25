import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  @Output()
  onSelect: EventEmitter<Contact> = new EventEmitter();

  constructor(
    public contactList: ContactListService
  ) {}

  select(contact: Contact): void {
    this.onSelect.emit(contact);
  }
}
