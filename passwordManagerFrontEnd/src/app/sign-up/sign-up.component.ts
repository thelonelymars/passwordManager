import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [NgIf],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  @Output() navigateRequest = new EventEmitter<string>();

  constructor(private router: Router) { }

  navigateToSignIn() {
    this.router.navigateByUrl('/signin');
  }
}