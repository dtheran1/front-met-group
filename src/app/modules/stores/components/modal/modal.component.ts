import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/models/store.model';
// import { ToDo } from '@models/todo.model';

interface InputData {
  item: Item;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  item: Item;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) data: InputData
  ) {
    this.item = data.item;
  }

  close() {
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean) {
    this.dialogRef.close({ rta });
  }
}
