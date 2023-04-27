import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/types/contact';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactListService } from '../service/contact-list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact$?: Observable<Contact>;
  constructor(
    private contactList: ContactListService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam != null) {
        this.contact$ = this.contactList.get(+idParam);
      }
    })
  }
}
