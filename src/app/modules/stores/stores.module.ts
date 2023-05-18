import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from '@angular/cdk/dialog';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './pages/stores/stores.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';
import { ItemsComponent } from './pages/items/items.component';
import { DetailStoreComponent } from './pages/detail-store/detail-store.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
// import { CreateItemComponent } from './pages/create-item/create-item.component';

@NgModule({
  declarations: [
    StoresComponent,
    CreateStoreComponent,
    ItemsComponent,
    DetailStoreComponent,
    EditItemComponent,
  ],
  imports: [
    CommonModule,
    StoresRoutingModule,
    FontAwesomeModule,
    DialogModule,
    ReactiveFormsModule,
  ],
})
export class StoresModule {}
