import { Component, Input } from '@angular/core';
import { Contact } from 'src/types/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent {
  @Input()
  contact?: Contact
}
