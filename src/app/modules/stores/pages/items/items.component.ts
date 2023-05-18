import { Component, OnInit } from '@angular/core';
import { Store } from './../../../../models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  nameStore = '';
  store: Store = {
    name: '',
    items: [],
    id: 0,
  };

  constructor(
    private storeService: StoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getStore();
  }
  getStore() {
    this.route.params.subscribe((params) => (this.nameStore = params['name']));
    this.storeService.getStore(this.nameStore).subscribe((data) => {
      this.store = data;
      // this.items = data.items;
    });
  }
}
