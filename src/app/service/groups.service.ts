import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  public groups: {[key: string]: string} = {
    'amis': 'Amis',
    'famille': 'Famille',
    'travail': 'Travail',
  };
}
