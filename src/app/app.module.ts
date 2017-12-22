import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
  MatToolbarModule, MatGridListModule, MatTooltipModule, MatDialogModule, MatChipsModule,
  MatButtonToggleModule, MatInputModule, MatSortModule, MatSlideToggleModule, MatSelectModule,
  MatCheckboxModule, MatRadioModule, MatSidenavModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { Ng2DragDropModule } from 'ng2-drag-drop';

import { SafePipe } from './services/safe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PetComponent } from './pet/pet.component';
import { DialogComponent } from './dialog/dialog.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PetService } from './services/pet.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DialogComponent,
    PetComponent,
    TutorialComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatTabsModule,
    MatToolbarModule, MatGridListModule, MatTooltipModule, MatDialogModule, MatChipsModule,
    MatButtonToggleModule, MatInputModule, MatSortModule, MatSlideToggleModule, MatSelectModule,
    MatCheckboxModule, MatRadioModule, MatSidenavModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    Ng2DragDropModule.forRoot(),
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    PetService,
  ],
  entryComponents: [DialogComponent, TutorialComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
