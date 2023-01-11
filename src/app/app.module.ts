// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NotesComponent } from './notes/notes.component';
// import { environment } from 'src/environments/environment';

// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// @NgModule({
//   declarations: [
//     AppComponent,
//     NotesComponent
//   ],
//   imports: [
//     BrowserModule,
//     NgbModule,
//     provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//     provideFirestore(() => getFirestore()),
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Import library module
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotesComponent } from './notes/notes.component';

import { environment } from 'src/environments/environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NotesComponent],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),

    provideFirestore(() => getFirestore()),
  ],

  providers: [],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
