import { Component,OnInit } from '@angular/core';
import { UserService } from '../../compoenents/users/user.service';
import { User } from '../../auth/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users:User[]=[]
  weekList=[{dayName:'Monday',dayNumber:'1'},{dayName:'Tuesday',dayNumber:'2'},{dayName:'Wednesday',dayNumber:'3'},{dayName:'Thursday',dayNumber:'4'},{dayName:'Friday',dayNumber:'5'},{dayName:'Saturday',dayNumber:'6'},{dayName:'Sunday',dayNumber:'7'}];
  role:string
  constructor(private userService:UserService,private router:Router) {
  // this.users=this.userService.getUsers();
  this.role = localStorage.getItem('role') || '';
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => this.users = data,
      (error) => console.error('Error fetching users', error)
    );
  }

  showUser(id:any)
  {
    console.log(id);
   this.router.navigate([`/home/users/${id}`]);
  }
}
