import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Contact, ContactBook } from 'src/types/contact';
import { Observable, ReplaySubject, firstValueFrom, map, of } from 'rxjs';
import { API_URL_TOKEN } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private contacts: ContactBook = {};
  private subject = new ReplaySubject<ContactBook>(1);

  constructor(
    private client: HttpClient,
    @Inject(API_URL_TOKEN) private apiUrl: string
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
        this.contacts = data as {[key: string]: Contact[]};
        this.subject.next(this.contacts);
      }) // souscrire en attachant une fonction de callback
  }

  get contacts$(): Observable<ContactBook> {
    return this.subject.asObservable();
  }

  getContactsByGroup$(group: string): Observable<Contact[]> {
    return this.contacts$
      .pipe(map((book: ContactBook) => book[group]))
    ;
  }

  push(group: string, contact: Contact): number {
    this.contacts[group].push(contact);
    this.subject.next(this.contacts);
    this.client.post('/contact', contact)
      .subscribe(data => console.log(data))
    ;

    return this.contacts[group].length - 1;
  }

  get(group: string, id: number): Observable<Contact> {
    return this.contacts$.pipe( // ne fonctionne pas dans le resolver si on utilise directement le subject
      map((contacts: ContactBook) => contacts[group][id])
    );
  }
}
