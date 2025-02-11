import { Component } from '@angular/core';
import { User } from '../../../auth/user.model';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  user:User|undefined;
  userId:number|undefined;
  constructor(private userService:UserService, private route:ActivatedRoute) { 
  this.route.params.subscribe((params) => {
    this.userId = +params['id'];
    this.userService.getUser(this.userId).subscribe(
      (user) => this.user = user,
      (error) => console.error('Error fetching user', error)
    );
  });
}
}
