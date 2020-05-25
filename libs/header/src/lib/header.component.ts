import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'llt-header',
  template: `
    <p>header works!</p>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.app-header') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
