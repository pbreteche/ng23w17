import { Component } from '@angular/core';
import { contacts } from 'src/fixtures/contacts';
import { Contact } from 'src/types/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contacts: Contact[] = contacts;
  current: Contact = contacts[0];
}
