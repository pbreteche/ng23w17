import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact?: Contact;

  get nameClasses(): string {
    return (this.contact?.firstName?.length || 0) > 3 ? 'long-name' : 'short-name';
  }

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({contact}) => {
      this.contact = contact;
    })
  }
}
