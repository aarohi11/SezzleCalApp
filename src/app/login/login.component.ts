import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username = '';
  password = '';
  submitted = false;
  users: User[];

  constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginservice: AuthenticationService,
        private userService: UserService
  ) { }

  ngOnInit() 
  {
      this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      });

      this.userService.getUsers().subscribe( data => 
      {
        this.users = data;      
        console.log("Users:"+JSON.stringify(this.users));     
      });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.username = this.f.username.value;
    this.password = this.f.password.value;

    // stop here if form is invalid
    if (this.loginForm.invalid) 
    {
        return;
    }
    this.loginservice.authenticate(this.username, this.password, this.users);

    /*if()
    {

    }*/
  }

}
