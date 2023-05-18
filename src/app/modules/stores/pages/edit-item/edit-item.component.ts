import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../utils/validators';

import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/models/store.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
})
export class EditItemComponent implements OnInit {
  form = this.formBuilder.nonNullable.group(
    {
      price: [0, [Validators.required]],
    },
  );
  status = 'init';
  item: Item | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const name = params.get('name');

      if (name) {
        this.getItem(name);
      }
    });
  }

  getItem(name: Item['name']) {
    return this.itemService.getItemByName(name).subscribe((data) => {
      this.item = data;
      this.form.controls.price.setValue(this.item.price);
    });
  }

  updateItem() {
    const { price } = this.form.getRawValue();
    const payload = {
      price,
      store_id: this.item?.store_id
    }

    this.itemService.updateItem(this.item!.name, payload).subscribe({
      next: () => {
        this.status = 'success';
        this.router.navigate(['/app']);
      },
      error: () => {
        this.status = 'failed';
      },
    });
  }
}
