import { Injectable } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from './contact-list.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentContactService {
  contact: Contact;
  constructor(list: ContactListService) {
    this.contact = list.contacts[0];
  }
}
