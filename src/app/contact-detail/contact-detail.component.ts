import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { CurrentContactService } from '../service/current-contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  constructor(private contactService: CurrentContactService) {}

  get contact(): Contact {
    return this.contactService.contact;
  }
}
