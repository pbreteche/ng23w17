import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CurrentGroupService } from 'src/app/service/current-group.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  slug?: string;
  group?: string;

  constructor(
    private route: ActivatedRoute,
    private current: CurrentGroupService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.slug = paramMap.get('slug')!;
      this.current.slug = this.slug;
    });
    this.route.data.subscribe(({group}) => {
      this.group = group;
    });
  }
}
