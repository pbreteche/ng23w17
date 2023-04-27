import { inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from 'src/types/contact';

export const contactResolver: ResolveFn<Contact> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(ContactListService).get(+route.paramMap.get('id')!);
    };
