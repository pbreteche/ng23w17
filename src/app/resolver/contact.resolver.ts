import { inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { ContactListService } from '../service/contact-list.service';
import { Contact } from 'src/types/contact';
import { CurrentGroupService } from '../service/current-group.service';

export const contactResolver: ResolveFn<Contact> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(ContactListService).get(
        inject(CurrentGroupService).slug!,
        +route.paramMap.get('id')!
      );
    };
