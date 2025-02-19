import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UsersService);
  router = inject(Router);

  ngOnInit(): void {
    if (localStorage.getItem('accessToken')) {
      this.router.navigate(['/dashboard']);
    }
  }

  async getUser(loginForm: NgForm) {
    //"emilys","password":"emilyspass"
    const loginUser: IUser = loginForm.value as IUser;
    loginUser.expiresInMins = 30;

    try {
      let response = await this.userService.login(loginUser);
      console.log(response);
      if (response.accessToken) {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        loginForm.reset();
        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      alert('Username o password incorrectos');
      loginForm.reset();
    }
  }
}
