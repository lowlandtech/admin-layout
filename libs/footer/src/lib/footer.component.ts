import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-admin-layout-footer',
  template: `
    <p>
      footer works!
    </p>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
