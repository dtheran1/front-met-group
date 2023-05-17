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

@Component({
  selector: 'app-boards',
  templateUrl: './stores.component.html',
})
export class StoresComponent implements OnInit {
  stores: Store[] = [];

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

  constructor(private meService: MeService, private storeService: StoreService) {}

  ngOnInit() {
    this.getMeBoards();
  }
  getMeBoards() {
    this.meService.getMeStores().subscribe(data => {
      this.stores = data.stores;
    });
  }

  deleteStore(name: string) {
    this.storeService.deleteStore(name).subscribe({
      next: () => {
        this.getMeBoards();
      },
    });
  }
}
