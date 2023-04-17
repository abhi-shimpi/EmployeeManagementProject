import { Component,OnInit} from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit{
  activatedButton=true;
  name = 'Get Current Url Route Demo';
  currentRoute!: string;

  constructor(private route: Router, private currRoute: ActivatedRoute) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.route.url)
    
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
