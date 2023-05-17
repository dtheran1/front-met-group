import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoresComponent } from './pages/stores/stores.component';
// import { StoreComponent } from './pages/stores/stores.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';

const routes: Routes = [
  {
    path: '',
    component: StoresComponent,
  },
  // {
  //   path: ':name',
  //   component: StoreComponent,
  // },
  {
    path: 'create-store',
    component: CreateStoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoresRoutingModule {}
