import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps-search',
  templateUrl: './apps-search.component.html',
  styleUrls: ['./apps-search.component.css']
})
export class AppsSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Component({
  selector: 'app-apps-search',
  template: `
    <nav class="logo">

      <!-- logo -->
      <div class="logo">
        <a class="navbar-item">
          <img src="assets/img/logo.png">
        </a>
      </div>
    </nav>
  `,
  styles: []
})


export default class yousef{}
