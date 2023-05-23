import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() currentPrice = 0;
  @Input() priceChange = 0;
}
