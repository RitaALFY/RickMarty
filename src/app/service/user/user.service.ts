import { Injectable } from '@angular/core';
import {User} from "../../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor() {
    this.users = User.generateFakeUsers()
  }


  getByUseremail(email: string): User | undefined {
    return this.users.find(u => u.email === email)

  }
}
