import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';


@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  @Output() navigateRequest = new EventEmitter<string>();

  constructor(private router: Router) { }
  
  navigateToSignUp() {
    this.router.navigateByUrl('/signup');
  }
  navigateToMainPage() {
    this.router.navigateByUrl('/mainpage');
  }
}
