import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  public isCollapsed = true;
  constructor(private router:Router){ }
  navigatetoGetMembership(): void{
    // Use the router's navigateByUrl() method to navigate to the new page
    this.router.navigateByUrl('/registration');
  }
}
