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

  constructor(private meService: MeService) {}

  ngOnInit() {
    this.getMeBoards();
    console.log(this.stores);
  }

  getMeBoards() {
    this.meService.getMeStores().subscribe((stores) => (this.stores = stores));
  }
}
