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

  constructor(private navigationService: NavigationService) { }
  
  navigateToSignUp() {
    this.navigationService.navigateToSignUp();
  }
}
