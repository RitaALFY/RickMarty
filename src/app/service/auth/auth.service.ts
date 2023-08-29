import { Injectable } from '@angular/core';
import {UserService} from "../user/user.service";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  private tokenSubject$: BehaviorSubject<string> = new BehaviorSubject<string>('')
  token$: Observable<string> = this.tokenSubject$.asObservable()

  constructor(private userService: UserService) { }

  get token(): string {
    return this.tokenSubject$.value
  }
  login(email: string, password: string): Promise<void> {
    return new Promise(
      (resolve, reject) => {

        const user = this.userService.getByUseremail(email)

        if(!user) {
          reject('L\'utilisateur n\'existe pas.')
          return // couper la fonction
        }

        if(user.password === password) {
          this.tokenSubject$.next('token')
          resolve()
        } else{
          reject('Les identifiants ne correspondent pas.')
        }
      }
    )
  }

  logout () {
    this.tokenSubject$.next('')
  }

}
