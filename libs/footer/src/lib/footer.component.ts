import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-footer',
  template: `
    <footer>
      footer works!
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
