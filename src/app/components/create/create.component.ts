import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: 'Panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(CreateEventDialog, {
      width: '250px',
      height: '250px',
      data: {
        animal: 'anda'
      }
    });
  }
}

@Component({
  selector: 'create-event-dialog',
  templateUrl: 'create-event-dialog.html',
})

export class CreateEventDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
