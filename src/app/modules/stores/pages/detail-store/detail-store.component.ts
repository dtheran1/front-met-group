import { Component, OnInit } from '@angular/core';
import {
  faBox,
  faWaveSquare,
  faClock,
  faAngleUp,
  faAngleDown,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { MeService } from '../../../../services/me.service';
import { Store } from './../../../../models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
})
export class DetailStoreComponent implements OnInit {
  stores: Store[] = [];
  nameStore = '';
  store: Store = {
    name: '',
    items: [],
    id: 0,
  };

  faTrello = faTrello;
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;

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

  deleteItem(name: Store['name']) {
    //
  }
}
