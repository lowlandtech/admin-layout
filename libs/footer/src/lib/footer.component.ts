import { Component, OnInit, HostBinding } from '@angular/core';

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
  @HostBinding('class.app-footer') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
