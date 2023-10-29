import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {Router} from "@angular/router";

/**
 * @title Toolbar overview
 */
@Component({
  selector: 'app-top-bar',
  templateUrl: 'top-bar.component.html',
  styleUrls: ['top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private router: Router) {}
  navigateToOtherPage() {
    console.log("Hello World")
  }
}