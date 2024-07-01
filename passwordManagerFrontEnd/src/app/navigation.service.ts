import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private router: Router) { }

  navigateToSignUp(): void {
    this.router.navigateByUrl('/signup');
  }
  navigateToSignIn(): void {
    this.router.navigateByUrl('/signin');
  }


  // You can add more navigation methods here
}