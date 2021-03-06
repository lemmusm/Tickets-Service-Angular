import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authservice: AuthService) { }

  canActivate() {
      return this.authservice.authenticated();
  }
}
