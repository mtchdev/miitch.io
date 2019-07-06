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
  public title = 'miitch.io';

  constructor() { }

  ngOnInit() {
    this.links = [
      {
        title: 'Home',
        route: '',
        active: true
      },
      {
        title: 'Projects',
        route: '/projects',
        active: false
      }
    ];
  }

}
