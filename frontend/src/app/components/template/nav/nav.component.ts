import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private _menuOpened = true;

  constructor() { }
  
  ngOnInit(): void {
  }
  
  get menuOpened() {
    return this._menuOpened;
  }
  set menuOpened(value) {
    this._menuOpened = value;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
  }


}
