import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { Contact } from 'src/types/contact';
import { contactResolver } from './contact.resolver';
import { Observable, map } from 'rxjs';

export const contactDetailTitleResolver: ResolveFn<string> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return (contactResolver(route, state) as Observable<Contact>).pipe(
        map((contact: Contact) => `Détail de ${contact.firstName} ${contact.lastName}`)
      );
    };
