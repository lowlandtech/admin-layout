import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-layout-sidebar',
  template: `
    <p>
      sidebar works!
    </p>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
