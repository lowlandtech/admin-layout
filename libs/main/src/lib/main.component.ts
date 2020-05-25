import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'llt-main',
  template: `
    <ng-content>
    </ng-content>
  `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
