import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  title: string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  title: string;

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(CreateEventDialog, {
      width: 'auto',
      height: 'auto',
      data: { title: this.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.title = result;
    });
  }
}

@Component({
  selector: 'create-event-dialog',
  templateUrl: 'create-event-dialog.html',
})

export class CreateEventDialog {
  constructor(
    public dialogRef: MatDialogRef<CreateEventDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void{
    this.dialogRef.close();
  }
}
