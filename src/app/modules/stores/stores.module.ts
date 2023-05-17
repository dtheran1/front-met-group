import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './pages/stores/stores.component';
import { CreateStoreComponent } from './pages/create-store/create-store.component';
// import { BoardComponent } from './pages/board/board.component';

// StoreComponent add a declaractions
@NgModule({
  declarations: [StoresComponent, CreateStoreComponent],
  imports: [
    CommonModule,
    StoresRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class StoresModule {}
