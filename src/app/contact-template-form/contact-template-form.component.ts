import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';
import { Router } from '@angular/router';
import { CurrentGroupService } from '../service/current-group.service';

@Component({
  selector: 'app-contact-template-form',
  templateUrl: './contact-template-form.component.html',
  styleUrls: ['./contact-template-form.component.scss']
})
export class ContactTemplateFormComponent {
  contact: Contact = {};

  constructor(
    public contactList: ContactListService,
    private current: CurrentGroupService,
    private router: Router
  ) {}

  save() {
    const id = this.contactList.push(this.current.slug!, this.contact);
    this.contact = {};
    this.router.navigate([this.current.slug, 'detail', id]);
  }
}
