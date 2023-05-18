import { Component, OnInit } from '@angular/core';
import { MeService } from '../../../../services/me.service';
import { Store } from './../../../../models/store.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-boards',
  templateUrl: './stores.component.html',
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];

  constructor(
    private meService: MeService,
    private storeService: StoreService,
  ) {}

  ngOnInit() {
    this.getMeStores();
  }
  getMeStores() {
    this.meService.getMeStores().subscribe((data) => {
      this.stores = data.stores;
    });
  }

  deleteStore(name: string) {
    this.storeService.deleteStore(name).subscribe({
      next: () => {
        this.getMeStores();
      },
    });
  }
}
