import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresComponent } from './pages/stores/stores.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';
import { ItemsComponent } from './pages/items/items.component';
import { DetailStoreComponent } from './pages/detail-store/detail-store.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  },
  {
    path: 'create-store',
    component: CreateStoreComponent,
  },
  {
    path: 'store/:name',
    component: DetailStoreComponent,
  },
  {
    path: 'store/:name/item/:name',
    component: EditItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {}
