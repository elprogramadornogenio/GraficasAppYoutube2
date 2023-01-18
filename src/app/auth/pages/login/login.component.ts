import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  public ValidarLogin = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.email, this.password);
    this.authService.login(this.email, this.password).subscribe(auth => {
      if(auth === undefined) {
        this.ValidarLogin = false;
        return;
      } else{
        this.router.navigate(['./graficas']);
      }
    })
  }

}
