import { CommonModule } from '@angular/common';
import { Component, effect, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {User} from './user.model'
import {Router} from '@angular/router'
import { UserService } from '../compoenents/users/user.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  imports: [FormsModule, CommonModule, RegisterComponent, LoginComponent,ReactiveFormsModule], // Standalone component imports
  standalone: true
})
export class AuthComponent {

  currentTab = 'sign up';
  // users:User[] = [];
  users = signal<User[]>([]);
  @ViewChild('userForm') userForm!: NgForm;
  loginForm=  new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    remember: new FormControl(false)
  });;
  
  // For Login form
  loginData = {
    email: '',
    password: '',
    remember: false
  };

  // For Register form
  registerData = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  };
  constructor(private router: Router,private userService:UserService) {
    // this.userService.getUsers().subscribe(
    //   (data: User[]) => this.users = data,
    //   (error) => console.error('Error fetching users', error)
    // );
    this.loadUsers();
   
  }
  loadUsers() {
    effect(() => {
      this.userService.getUsers().subscribe({
        next: (data) => this.users.set(data),
        error: (error) => console.error('Error fetching users', error),
      });
    });
  }
  onTabClick(tab: string) {
    this.currentTab = tab;
  }

  onLogin() {
    console.log('Logging in with:', this.loginForm.value);
    if (this.loginForm.invalid) {
      console.log('Invalid form submission');
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password, remember } = this.loginForm.value;

    // for (let user of this.users) {
      // if (user.email === email && user.password === password) {
        // console.log('Logged in!');
        const role = email === 'george.bluth@reqres.in' ? 'admin' : 'user';
        localStorage.setItem('role', role);
        if (remember) {
          // localStorage.setItem('email', email?);
        }
        this.router.navigate(['/home']);
        return;
      // }
    // }
  }

  onRegister() {
    // Example: This is where you'd call a service to register the user
    console.log('Registering with:', this.registerData);
    if (this.userForm.invalid) {
      console.log('Invalid form submission');
      this.userForm.control.markAllAsTouched();
      return;
    }
    // You could check if passwords match, etc.
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error('Passwords do not match!');
      return;
    }
    // this.users.push({id:34,email:this.registerData.email,password:this.registerData.password,name:this.registerData.name,age:10})
    this.router.navigate(['/home']);
    // Reset after submission if desired
    // this.registerData = {
    //   name: '',
    //   username: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    //   termsAccepted: false
    // };
  }
}
