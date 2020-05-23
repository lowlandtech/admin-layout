import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lowlandtech-aside',
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
