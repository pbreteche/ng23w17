import { Component } from '@angular/core';
import { GroupsService } from 'src/app/service/groups.service';

@Component({
  selector: 'app-group-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  constructor(
    private groupsService: GroupsService
  ) {}

  get groups(): { [key: string]: string} {
    return this.groupsService.groups;
  }
}
