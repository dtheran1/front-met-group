import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoresRoutingModule } from './stores-routing.module';
import { StoresComponent } from './pages/stores/stores.component';
// import { BoardComponent } from './pages/board/board.component';

// StoreComponent add a declaractions
@NgModule({
  declarations: [StoresComponent],
  imports: [CommonModule, StoresRoutingModule, FontAwesomeModule],
})
export class StoresModule {}
