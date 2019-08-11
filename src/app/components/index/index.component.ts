import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  public isProd = true;

  constructor() { }

  ngOnInit() {

  }

  openRepo(): void {
    if (this.isProd) { return; }
    window.location.href = 'https://github.com/spliitzx/miitch.io';
  }

}
