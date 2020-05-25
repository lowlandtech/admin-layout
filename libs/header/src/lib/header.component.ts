import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-header',
  template: `
    <header>
      header works!
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
