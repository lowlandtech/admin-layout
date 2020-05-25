import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-main',
  template: `
    <main>
      main works!
    </main>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
