import { Component, ViewChild } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';
import { NgFor } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ItemCardComponent, NgFor, MatButtonModule, MatIconModule, MatMenuModule],
  animations: [
    trigger('toggleSection', [
      state('hidden', style({
        transform: 'translateY(100%)',
        opacity: 0
      })),
      state('visible', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden <=> visible', [
        animate('0.3s ease-in-out')
      ])
    ])
  ],


  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  @ViewChild('usernameInput') usernameInput: any;
  @ViewChild('accountInput') accountInput: any;
  @ViewChild('passwordInput') passwordInput: any;
  cards = [
    { id: 0, title: 'Card 1', content: 'This is card 1' },
  ];
  
  private lastId = 0; // Track the last used id
  isSectionVisible = false;

  AddItem() {
    // Toggle the visibility of the section
    this.isSectionVisible = !this.isSectionVisible;
  }

  CreateItem() {
    let Currentaccount = [];
    Currentaccount.push(this.usernameInput.nativeElement.value, this.accountInput.nativeElement.value, this.passwordInput.nativeElement.value);
    let flag: Boolean = true;
    for (let i = 0; i <= 2; i++) {
      if (Currentaccount[i] == '' || Currentaccount[i] == null) {
        flag = false;
        break;
      }
    }
    if (flag == false) {
      alert('Please fill in all the fields');
    } else {
      this.lastId++; // Increment the last used id
      this.cards.push({
        id: this.lastId, // Use the incremented id
        title: this.usernameInput.nativeElement.value,
        content: this.accountInput.nativeElement.value
      });
      this.CloseSection();
    }
  }

  CloseSection() {
    this.isSectionVisible = false;
    this.usernameInput.nativeElement.value = '';
    this.accountInput.nativeElement.value = '';
    this.passwordInput.nativeElement.value = '';
  }

  UseCardInfo(CardInfo: string[]) {
    this.cards=this.cards.filter(card => card.id !== parseInt(CardInfo[0]));
  }
}


