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
import { Item, Store } from './../../../../models/store.model';
import { StoreService } from 'src/app/services/store.service';
import { ActivatedRoute } from '@angular/router';
import { ModalComponent } from '../../components/modal/modal.component';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.component.html',
})
export class DetailStoreComponent implements OnInit {
  store: Store | null = null;

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
    private route: ActivatedRoute,
    private dialog: Dialog
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');
      if (name) {
        this.getStore(name);
      }
    });
  }

  private getStore(name: string) {
    this.storeService.getStore(name).subscribe((data) => {
      this.store = data;
    });
  }

  openDialog(item: Item) {
    const dialogRef = this.dialog.open(ModalComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      data: {
        item: item,
      },
    });
    dialogRef.closed.subscribe((output: any) => {
      console.log(output);
    });
  }

  deleteItem(name: Store['name']) {
    //
  }
}
