import { Component, OnInit } from '@angular/core';
import { Item, Store } from './../../../../models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
})
export class DetailStoreComponent implements OnInit {
  store: Store | null = null;

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const storeName = params.get('storename');
      if (storeName) {
        this.getStore(storeName);
      }
    });
  }

  private getStore(storeName: Store['name']) {
    this.storeService.getStore(storeName).subscribe((data) => {
      this.store = data;
    });
  }

  deleteItemByName(name: Item['name']) {
    this.itemService.deleteItem(name).subscribe({
      next: () => {
        this.getStore(this.store!.name);
      },
      error: () => {
        //
      }
    })
  }
}
