import { computed, effect, Injectable, signal } from '@angular/core';
import { User } from '../../auth/user.model';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})

export class UserService {
   private apiUrl = 'https://reqres.in/api/users';

   constructor(private http: HttpClient) {
    this.loadUsers();
    }
//  users:User[] = [
//     {id:1, email:'abc@gmail.com', password:'abc123', name:'abc', age:20},
//     {id:2, email:'xyz@gmail.com', password:'xyz123', name:'xyz', age:25},
//     {id:3,email:'mnp@gmail.com', password:'mnp123', name:'mnp', age:30}
//  ];
//  getUsers(){
//     return this.users;
//  }
//  getUser(id:number){
//     return this.users.find(user => user.id === id);
//  }
private userResponse = signal<any[]>([]);

// Computed signal to transform the API response into user data
users = computed(() => this.userResponse().map(user => ({
  id: user.id,
  email: user.email,
  name: `${user.first_name} ${user.last_name}`,
  avatar: user.avatar
})));
getUsers(): Observable<User[]> {
   return this.http.get<any>(this.apiUrl).pipe(
     map(response => response.data.map((user: any) => ({
       id: user.id,
       email: user.email,
       name: `${user.first_name} ${user.last_name}`,
       avatar: user.avatar
     })))
   );
 }
 getUser(id: number): Observable<User | undefined> {
   return this.getUsers().pipe(
     map(users => users.find(user => user.id === id))
   );
 }
 private loadUsers() {
  effect(() => {
    this.http.get<any>(this.apiUrl).subscribe({
      next: (response) => this.userResponse.set(response.data),
      error: (err) => console.error('Error fetching users', err),
    });
  });
}
}
