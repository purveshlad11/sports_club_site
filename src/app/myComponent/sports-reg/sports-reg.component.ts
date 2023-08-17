import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-sports-reg',
  templateUrl: './sports-reg.component.html',
  styleUrls: ['./sports-reg.component.css']
})
export class SportsRegComponent {
  constructor(private router:Router,private http: HttpClient){}
  navigatetoGetMembership(): void{
    // Use the router's navigateByUrl() method to navigate to the new page
    this.router.navigateByUrl('/registration');
  }

  name: string="";
  email: string="";
  sport:string="";
  duration:string="";

  sregister(){
    let bodyData={
      "name":this.name,
      "email":this.email,
      "sport":this.sport,
      "duration":this.duration,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


    this.http.post("http://localhost:8086/memb/register",bodyData,httpOptions).subscribe((resultData: any)=>
    {
        // console.log("down below is resuldata ");     //this console.log will be seen in console of chrome devlopers tool 
        console.log(resultData);
        if(resultData.status)
        {
          alert(`You've registered for ${this.sport} for ${this.duration} months`);
      
 
            this.name = "";
            this.email = "";
            this.sport="";
            this.duration="";

            this.router.navigateByUrl('/');

        }
        else {
          alert(resultData.message);
         
          
        }
        


    });


  }
  

}
