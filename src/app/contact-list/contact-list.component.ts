import { Component } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ContactListService } from '../service/contact-list.service';
import { Observable } from 'rxjs';
import { CurrentGroupService } from '../service/current-group.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  constructor(
    private contactList: ContactListService,
    private current: CurrentGroupService
  ) {}

  get contacts$(): Observable<Contact[]> {
    return this.contactList.getContactsByGroup$(this.current.slug!);
  }
}
