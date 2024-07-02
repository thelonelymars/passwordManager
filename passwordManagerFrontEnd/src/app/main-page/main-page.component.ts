import { Component } from '@angular/core';
import { ItemCardComponent } from '../item-card/item-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
