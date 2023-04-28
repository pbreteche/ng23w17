import { inject } from '@angular/core';
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn
} from '@angular/router';
import { GroupsService } from '../service/groups.service';

export const groupResolver: ResolveFn<string> =
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
      return inject(GroupsService).groups[route.paramMap.get('slug')!];
    };
