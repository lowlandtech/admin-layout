import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-layout-aside',
  template: `
    <p>
      aside works!
    </p>
  `,
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
