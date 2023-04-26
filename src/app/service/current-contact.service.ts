import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from 'src/types/contact';

@Injectable({
  providedIn: 'root'
})
export class CurrentContactService {
  private subject = new BehaviorSubject<Contact>({});

  get contact$(): Observable<Contact> {
    return this.subject.asObservable();
  }

  set(contact: Contact) {
    this.subject.next(contact);
  }
}
