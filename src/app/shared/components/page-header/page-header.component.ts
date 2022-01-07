import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() isManagement: boolean;
  @Input() title: string;
  @Input() link: string;
  @Input() linkTitle: string;

  constructor() { }
}
