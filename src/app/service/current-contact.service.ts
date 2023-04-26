import { Injectable } from '@angular/core';
import { Contact } from 'src/types/contact';

@Injectable({
  providedIn: 'root'
})
export class CurrentContactService {
  contact: Contact = {};
}
