/**
 * Name: Trevor McLaurine
 * Date: 9/30/2023
 * Assignment: In-N-Out Books
 * Description: App Component
**/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment: string = ""

  constructor() {
    this.assignment = "In-N-Out Books";
  }
}
