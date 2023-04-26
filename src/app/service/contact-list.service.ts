import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/types/contact';
import { CurrentContactService } from './current-contact.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private contacts: Contact[] = [];
  private subject = new BehaviorSubject<Contact[]>([]);

  constructor(
    private client: HttpClient,
    private current: CurrentContactService
  ) {
    this.client.get('/assets/contacts.json') // retourne un observable
      .subscribe(data => {
        this.contacts = data as Contact[];
        this.subject.next([...this.contacts]);
        this.current.contact = this.contacts[0];
      }) // souscrire en attachant une fonction de callback
  }

  get contacts$(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  push(contact: Contact): void {
    this.contacts.push(contact);
    this.current.contact = contact;
    this.subject.next([...this.contacts]);
  }
}
