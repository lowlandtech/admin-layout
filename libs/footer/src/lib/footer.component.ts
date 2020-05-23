import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lowlandtech-footer',
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
