import { Component} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent{
  activatedButton=true;
  name = 'Get Current Url Route Demo';
  currentRoute!: string;

  constructor(private route: Router, private currRoute: ActivatedRoute) {
  }
  

  displayHome() {
    this.route.navigate(['/']);
  }
  displayCharts() {
    this.activatedButton = true;
    this.route.navigate(['/dashboard'], { relativeTo: this.currRoute });
  }
  displayEmplyeeSystem() {
    this.activatedButton = false;
    this.route.navigate(['employees']);
  }
}
