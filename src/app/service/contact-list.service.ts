import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from 'src/types/contact';
import { CurrentContactService } from './current-contact.service';
import { BehaviorSubject, Observable, catchError, firstValueFrom, of } from 'rxjs';

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
    let headers = new HttpHeaders({
      'Content-type': 'application/json',
      'Custom-header': 'custom-value'
    }); // permet de manipuler via les méthodes de HttpHeaders

    firstValueFrom(this.client.get('/assets/contacts.json', {
      headers: {
        'Content-type': 'application/json',
        'Custom-header': 'custom-value'
      } // possible de passer simplement un objet littéral aussi
    })) // retourne un observable
        // tranformé en promesse par firstValueFrom
      .catch(error => {
          console.error(error.status, error.message);
          return of([]);
        }) // pipe prend en entrée un observable, l'altère et retourne le nouvel observable modifié
        // en cas de promesse, plus de "pipe", mais directement un "catch"
      .then(data => {
        this.contacts = data as Contact[];
        this.subject.next([...this.contacts]);
        this.current.set(this.contacts[0]);
      }) // souscrire en attachant une fonction de callback
  }

  get contacts$(): Observable<Contact[]> {
    return this.subject.asObservable();
  }

  push(contact: Contact): void {
    this.contacts.push(contact);
    this.current.set(contact);
    this.subject.next([...this.contacts]);
    this.client.post('/contact', contact)
      .subscribe(data => console.log(data))
    ;
  }
}
