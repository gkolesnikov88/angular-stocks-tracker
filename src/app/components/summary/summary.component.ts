import {Component, Input, OnInit} from '@angular/core';
import {StockInterface} from '../../services/stocks.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {

  @Input() stock: StockInterface;

  constructor() { }

  isNegative() {
    return this.stock && this.stock.change < 0;
  }

  isPositive() {
    return this.stock && this.stock.change > 0;
  }

}
