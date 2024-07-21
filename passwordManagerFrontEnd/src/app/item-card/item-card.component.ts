import { Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { NgIf,NgFor } from '@angular/common';
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgIf,NgFor, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

  @Input() Title: string='';
  @Input() Description: string='';

   
}
