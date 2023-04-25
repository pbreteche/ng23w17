import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contact: Contact = {
    firstName: 'Bob',
    lastName: 'Lenon',
    email: 'bobby@beatles.uk'
  }
}
