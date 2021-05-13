import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  testuser = false;
  role:string;
  company:any;

  constructor( private route: ActivatedRoute,
    private router: Router) { 

  }

  authenticate(username, password,users) 
  {
     console.log("UserName:"+username);
      console.log("Password:"+password);
      console.log("Users:"+JSON.stringify(users));
      /*console.log("Company Name:"+companyName);*/

      //console.log("\n Users:"+JSON.stringify(users));
      for(let element of users)
      {  
      //  console.log("\n element:"+JSON.stringify(element));
        if(element.username === username && element.userPassword === password)
        {
          //console.log("\n Inside superuser authenticate");
          console.log("\n Element name:"+element.name);
          sessionStorage.setItem('Name', element.name);
          this.router.navigate(['/calapp']);
          this.testuser = true;
          //return this.testuser;
        }
      }
      return this.testuser;
    }

   isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }
  
   /* logOut() {
      sessionStorage.removeItem('username')
    }
*/
}
