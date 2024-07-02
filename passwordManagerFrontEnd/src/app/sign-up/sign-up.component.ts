import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @Input() isSignedIn: boolean | undefined;
  @Output() isSignedInChange = new EventEmitter<boolean>()
  constructor(private router: Router) { }

  navigateToSignIn() {
    this.isSignedIn = !this.isSignedIn;
    this.isSignedInChange.emit(this.isSignedIn);
    this.router.navigateByUrl('/signin');
  }
 
  
}