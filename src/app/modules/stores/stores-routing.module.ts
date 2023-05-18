import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresComponent } from './pages/stores/stores.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';
// import { ItemsComponent } from './pages/items/items.component';
import { DetailStoreComponent } from './pages/detail-store/detail-store.component';
import { EditItemComponent } from './pages/edit-item/edit-item.component';
// import { CreateItemComponent } from './pages/create-item/create-item.component';

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
    path: 'store/:storename',
    component: DetailStoreComponent,
  },
  {
    path: 'store/:storename/item/:itemname',
    component: EditItemComponent,
  },
  // {
  //   path: 'store/:storename/item/create-item/new',
  //   component: CreateItemComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {}
