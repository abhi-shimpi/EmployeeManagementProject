import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private route: Router, private currRoute: ActivatedRoute) {}

  displayHome() {
    this.route.navigate(['/']);
  }
  displayCharts() {
    this.route.navigate(['/dashboard'], { relativeTo: this.currRoute });
  }
  displayEmplyeeSystem() {
    this.route.navigate(['employees']);
  }
}
