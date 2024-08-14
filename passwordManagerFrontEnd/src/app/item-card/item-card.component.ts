import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [NgIf, NgFor, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent {

  @Input() id: string = '';
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() CardInfo: string = '';
  @Output() OutputCardInfo = new EventEmitter<string[]>();

  SendCardInfo() {
    let tempCardInfo = [];
    
    tempCardInfo.push(this.id);
    tempCardInfo.push(this.Title);
    tempCardInfo.push(this.Description);
    this.OutputCardInfo.emit(tempCardInfo);
    tempCardInfo = [];
  }
}