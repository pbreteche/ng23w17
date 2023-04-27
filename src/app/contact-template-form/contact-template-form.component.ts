import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact: Contact = {};

  constructor(
    public contactList: ContactListService,
    private router: Router
  ) {}

  save() {
    const id = this.contactList.push(this.contact);
    this.contact = {};
    this.router.navigate(['detail', id]);
  }
}
