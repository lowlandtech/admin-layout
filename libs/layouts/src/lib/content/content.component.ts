import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-content',
  template: `
  <ng-content>
  </ng-content>
  `,
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @HostBinding('class.app-content') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
