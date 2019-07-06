import { Component, OnInit } from '@angular/core';

interface Link {
  title: string;
  route: string;
  active: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public links: Link[] = [];

  constructor() { }

  ngOnInit() {
    this.links = [
      {
        title: 'Home',
        route: '/',
        active: true
      }
    ];
  }

}
