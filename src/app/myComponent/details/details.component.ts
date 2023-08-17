import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  constructor(private router: Router){}

  navigatetoRegistration(): void{

    
     // Use the router's navigateByUrl() method to navigate to the new page
     this.router.navigateByUrl('/sports-reg');
  }

}










