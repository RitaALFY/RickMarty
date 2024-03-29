import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {AuthService} from "../../service/auth/auth.service";
import {Router} from "@angular/router";
import {Character} from "../../model/character.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit {
  searchTerm: string = '';


  isConnected$!: Observable<boolean>

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.isConnected$ = this.authService.token$
      .pipe(
        map(token => Boolean(token))
      )
  }

  onClickLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/login')
  }

  // onInputChange(e: any) {
  //   if (e.target.dataset.type === 'text') {
  //     this.searchText$.next(e.target.value)
  //
  //   }
  // }

}
