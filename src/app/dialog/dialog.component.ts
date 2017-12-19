import { Component, HostBinding, AfterViewInit, Inject, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatTextareaAutosize, MatDialogClose, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { Parameter } from '../parameter';
import { PetService } from 'app/services/pet.service';

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  styleUrls: ['dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  onAdd: any = new EventEmitter();

  namaForm: any = new FormGroup({
    altername: new FormControl(''),
  });

  namaPet: String;

  constructor( 
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: Http,
    public petNewDialog: MatDialogRef<DialogComponent>,
    public dialog: MatDialog,
    public petService: PetService,
   ) { }

  ngOnInit() {

  }
  onSubmit(): void {
    let errorMessage: String;
    let body = this.namaForm.value;
    this.openTutorial();
    this.petService.postNama(body)
      .subscribe(result => {
        if (result.nama) {
          this.namaPet = result.nama;
          console.log(this.namaPet);
          this.onAdd.emit(this.namaPet);
        }
      },
      error => errorMessage = error);
  }

  closeDialog(): void {
    this.petNewDialog.close();
  }

  openTutorial() {
    this.dialog.open(TutorialComponent, {
      data: {

      },
    });
  }

}
