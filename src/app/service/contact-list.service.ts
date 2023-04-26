import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/types/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  contacts: Contact[] = [];

  constructor(
    private client: HttpClient
  ) {
    this.client.get('/assets/contacts.json') // retourne un observe
      .subscribe(data => this.contacts = data as Contact[]) // souscrire en attachant une fonction de callback
  }
}
