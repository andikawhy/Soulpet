import { Component, HostBinding, AfterViewInit, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatTextareaAutosize, MatDialogClose, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Parameter } from '../parameter';

@Component({
  selector: 'app-tutorial',
  templateUrl: 'tutorial.component.html',
  styleUrls: ['tutorial.component.scss'],
})
export class TutorialComponent implements OnInit{
  body: Array<string>;
  namamu: Parameter;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public http: Http, public dialog2: MatDialogRef<TutorialComponent>) {}

  ngOnInit(){

  }
  onSubmit(){

 }

  closeDialog(): void {
    this.dialog2.close();
    console.log('hehe');
}

}
