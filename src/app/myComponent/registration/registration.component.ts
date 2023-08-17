import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string="";
  email: string="";
  phone: String="";  
  birthdate: string="";
  gender: string=""; 
  problem: String=""; 
  prob_details: string="";

  constructor(private http: HttpClient,private router: Router )
  {
   
  }
  

  register()
  {
  
    let bodyData = {
      "name" : this.name,
      "email" : this.email,
      "phone" : this.phone,
      "birthdate":this.birthdate,
      "gender":this.gender,
      "problem":this.problem,
      "prob_details":this.prob_details,
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };


    this.http.post("http://localhost:8086/user/create",bodyData,httpOptions).subscribe((resultData: any)=>
    {
        // console.log("down below is resuldata ");     //this console.log will be seen in console of chrome devlopers tool 
        console.log(resultData);
        if(resultData.status)
        {
          alert("Congratulation!! you're now a Member");
      
 
            this.name = "";
            this.email = "";
            this.phone  = "";
            this.birthdate="";
            this.gender="";
            this.problem ="";
            this.prob_details="";

            this.router.navigateByUrl('/');

        }
        else{
          alert("please fill the data properly!!")
          
        }
        


    });
} 
}