import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  tableData: any[];

  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    var self = this;
    this.storeService.getProducts()
      .subscribe(function(prods) {
        self.tableData = prods.data;
      });
  }

}
