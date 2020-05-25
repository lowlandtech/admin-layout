import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-sidebar',
  template: `
    <nav>
      sidebar works!
    </nav>
  `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
