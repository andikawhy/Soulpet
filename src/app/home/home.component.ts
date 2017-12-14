import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatTextareaAutosize, MatDialogClose, MatDialogRef } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import { FormGroup, FormControl } from '@angular/forms';
import { Parameter, Pet } from '../parameter';
import { Http, RequestOptions, Headers } from '@angular/http';
import { PetService } from '../services/pet.service';
import { SafePipe } from '../services/safe.pipe';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
  parameterForm: any = new FormGroup({
    username: new FormControl('anon'),
    habitat: new FormControl(''),
    warna: new FormControl(''),
    kulit: new FormControl(''),
    makanan: new FormControl(''),
    gender: new FormControl('perempuan'),
    status: new FormControl(''),
    kepribadian: new FormControl(''),
    pendapatan: new FormControl(''),
    kesibukan: new FormControl(''),
  });

  habitat: Parameter[] = [
    { name: 'Darat', type: 'habitat' },
    { name: 'Air', type: 'habitat' },
    { name: 'Udara', type: 'habitat' },
    { name: 'Amfibi', type: 'habitat' }
  ];

  warna: Parameter[] = [
    { name: 'gelap', type: 'warna' },
    { name: 'terang', type: 'warna' },
    { name: 'campuran', type: 'warna' },
  ];

  kulit: Parameter[] = [
    { name: 'berbulu', type: 'kulit' },
    { name: 'bulu', type: 'kulit' },
    { name: 'bersisik kering', type: 'kulit' },
    { name: 'bersisik basah', type: 'kulit' },
  ];

  makanan: Parameter[] = [
    { name: 'herbivora', type: 'makanan' },
    { name: 'karnivora', type: 'makanan' },
    { name: 'omnivora', type: 'makanan' },
  ];

  status: Parameter[] = [
    { name: 'menikah', type: 'status' },
    { name: 'tidak menikah', type: 'status' },
  ];

  kepribadian: Parameter[] = [
    { name: 'pendiam', type: 'kepribadian' },
    { name: 'serius', type: 'kepribadian' },
    { name: 'Aktif', type: 'kepribadian' },
    { name: 'suka berpergian', type: 'kepribadian' },
    { name: 'suka berbelanja', type: 'kepribadian' },
    { name: 'hemat', type: 'kepribadian' },
  ];

  pendapatan: Parameter[] = [
    { name: 'belum berpenghasilan', type: 'pendapatan' },
    { name: 'menengah kebawah', type: 'pendapatan' },
    { name: 'menengah', type: 'pendapatan' },
    { name: 'menengah keatas', type: 'pendapatan' },
  ];

  kesibukan: Parameter[] = [
    { name: 'tidak sibuk', type: 'kesibukan' },
    { name: 'sibuk', type: 'kesibukan' },
    { name: 'sangat sibuk', type: 'kesibukan' },
  ];

  parameter: Parameter[] = [];
  droppedParameter: Parameter[] = [];
  scope: String;
  none: Parameter[] = [];
  pet: String;
  namaPet: String;

  urlMaps: String;
  petMaps: String;

  constructor(
    public dialog: MatDialog,
    private petService: PetService,
    private _http: Http,
  ) {

  }

  onParameterDrop(e: any, parameter: Parameter) {
    if (this.scope === 'habitat') {
      this.habitatAdd(e, parameter);
    } else if (this.scope === 'warna') {
      this.warnaAdd(e, parameter);
    } else if (this.scope === 'kulit') {
      this.kulitAdd(e, parameter);
    } else if (this.scope === 'makanan') {
      this.makananAdd(e, parameter);
    } else if (this.scope === 'status') {
      this.statusAdd(e, parameter);
    } else if (this.scope === 'kepribadian') {
      this.kepribadianAdd(e, parameter);
    } else if (this.scope === 'pendapatan') {
      this.pendapatanAdd(e, parameter);
    } else if (this.scope === 'kesibukan') {
      this.kesibukanAdd(e, parameter);
    }
  }

  removeItem(item: any, list: Array<any>) {
    const index = list.map(function (e) {
      return e.name;
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  habitatAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'habitat') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          habitat: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('habitat added');
      this.droppedParameter = [];
      // console.log(this.droppedParameter);
      if (this.droppedParameter) {
        this.scope = 'warna';
        this.parameter = this.warna;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  warnaAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'warna') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          warna: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('warna added');
      this.droppedParameter = [];
      // console.log(this.droppedParameter);
      if (this.droppedParameter) {
        this.scope = 'kulit';
        this.parameter = this.kulit;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  kulitAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'kulit') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          kulit: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('kulit added');
      this.droppedParameter = [];
      // console.log(this.droppedParameter);
      if (this.droppedParameter) {
        this.scope = 'makanan';
        this.parameter = this.makanan;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  makananAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'makanan') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          makanan: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('makanan added');
      this.droppedParameter = [];
      if (this.droppedParameter) {
        this.scope = 'status';
        this.parameter = this.status;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  statusAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'status') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          status: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('makanan added');
      this.droppedParameter = [];
      if (this.droppedParameter) {
        this.scope = 'kepribadian';
        this.parameter = this.kepribadian;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  kepribadianAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'kepribadian') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          kepribadian: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('makanan added');
      this.droppedParameter = [];
      if (this.droppedParameter) {
        this.scope = 'pendapatan';
        this.parameter = this.pendapatan;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  pendapatanAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'pendapatan') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          pendapatan: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('makanan added');
      this.droppedParameter = [];
      if (this.droppedParameter) {
        this.scope = 'kesibukan';
        this.parameter = this.kesibukan;
        // console.log(this.parameter);
        // console.log(this.scope);
      }
    }
  }

  kesibukanAdd(e: any, parameter: Parameter): void {
    if (this.droppedParameter && this.scope === 'kesibukan') {
      this.droppedParameter.push(e.dragData);
      for (parameter of this.droppedParameter) {
        this.parameterForm.patchValue({
          kesibukan: parameter.name,
        });
        console.log(parameter.name);
      }
      // console.log('makanan added');
      this.droppedParameter = [];
      if (this.droppedParameter) {
        this.scope = 'none';
        this.parameter = this.none;
        // this.generatePet();
      }
    }
  }

  ngOnInit() {
    this.openDialog();
    this.scope = 'habitat';
    this.parameter = this.habitat;
  }

  generatePet(body: Pet): void {
    let errorMessage: String;
    body = (this.parameterForm.value);
    console.log(body);
    this.petService.generatePet(body)
      .subscribe(
      result => {
        if (result.pet) {
          this.pet = result.pet;
          console.log(this.pet);
        }
      },
      error => errorMessage = error);
    console.log(this.namaPet);
    console.log(this.pet);
  }

  cariMaps(): void {
    this.urlMaps = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyDU1aTue-7O2hvT9LktuEgrPc1RiFHEbvE';
    this.petMaps = `${this.urlMaps}&q=pet_shop,${this.pet}`;
    console.log(this.petMaps);
  }

  openDialog(): void {
    const dialogRef: any = this.dialog.open(DialogComponent, {
      disableClose: false,
    });
    let sub: any = dialogRef.componentInstance.onAdd.subscribe((data) => this.namaPet = data);
  }

}

  //   let headers = new Headers;
    //   headers.append('Accept', 'application/json');
    //   headers.append('Content-Type', 'application/json');
    //   let options = new RequestOptions({ headers: headers });
    //   this._http.post('http://www.admin.odc-abcd.com/soulpet/parameter', body, options)
    //     .subscribe(data => {
    //       console.log(data['_body']);
    //     }, error => {
    //       console.log(error);
    //     });
    // }