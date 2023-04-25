import { Injectable } from '@angular/core';
import { contacts } from 'src/fixtures/contacts';
import { Contact } from 'src/types/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  contacts: Contact[] = contacts;
}
