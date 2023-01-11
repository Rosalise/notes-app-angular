import { Injectable } from '@angular/core';
import { Notes } from './notes';
import { collectionData, deleteDoc, doc, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private afs:Firestore) { }

  //Add a New Note
  addNote(notes: Notes) {
    notes.id = doc(collection(this.afs, 'id')).id
    return addDoc(collection(this.afs, 'Notes'), notes);
   }

   //Get All Notes
   getNotes():Observable<Notes[]> {
    let notesRef = collection(this.afs, 'Notes');
    return collectionData(notesRef, {idField: 'id'}) as Observable<Notes[]>
   }

   //Delete A Note
   deleteNote(note: Notes) {
    let docRef = doc(this.afs, `Notes/${note.id}`);
    return deleteDoc(docRef);
  }

  //Update Note
  updateNote(note: Notes, notes: any) {
    const docRef = doc(this.afs, `Notes/${note.id}`);
    return updateDoc(docRef, notes);
  }
}
