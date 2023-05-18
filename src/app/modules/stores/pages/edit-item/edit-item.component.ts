import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item, Store } from 'src/app/models/store.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent implements OnInit {
  formEdit = this.formBuilder.nonNullable.group({
    price: [0, [Validators.required]],
  });

  form = this.formBuilder.nonNullable.group({
    price: [0, [Validators.required]],
    name: ['', [Validators.required]],
  });
  status = 'init';
  item: Item | null = null;
  store: Store | null = null;
  isCreating = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const itemName = params.get('itemname');
      const storeName = params.get('storename');

      if (itemName === 'create-item') {
        this.isCreating = true
        this.getStore(storeName as string);
      } else {
        this.getItem(itemName as string);
      }
    });
  }

  private getStore(storeName: Store['name']) {
    this.storeService.getStore(storeName).subscribe((data) => {
      this.store = data;
    });
  }

  getItem(itemName: string) {
    return this.itemService.getItemByName(itemName).subscribe((data) => {
      this.item = data;
      this.formEdit.controls.price.setValue(this.item.price);
    });
  }

  createItem() {
    if (this.form.valid) {
      const { price, name } = this.form.getRawValue();
      const payload = {
        price,
        store_id: this.store?.id,
      };
      this.itemService.createItem(name, payload as Item).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/app']);
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  updateItem() {
    if (this.formEdit.valid) {
      const { price } = this.formEdit.getRawValue();
      const payload = {
        price,
        store_id: this.item?.store_id,
      };

      this.itemService.updateItem(this.item!.name, payload as Item).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/app']);
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
