import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-aside',
  template: `
    <aside>
      aside works!
    </aside>
  `,
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
