import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) { }
  navigateToNewPage(): void {

    // this.router.navigateByUrl('/');          //to go home

    // Use the router's navigateByUrl() method to navigate to the new page
    this.router.navigateByUrl('/signup');
   
    

  }
}

