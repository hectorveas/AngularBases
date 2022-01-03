import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  rutas = [
    {
      nombre: 'Home',
      path: '/home'
    },
    {
      nombre: 'About',
      path: '/about'
    },
    {
      nombre: 'Contact',
      path: '/contact'
    },
    {
      nombre: 'Posts',
      path: '/posts'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
