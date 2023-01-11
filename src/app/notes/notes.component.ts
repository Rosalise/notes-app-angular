import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clippingParents } from '@popperjs/core';
import { Notes } from '../notes';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{
  notesForm!: FormGroup 
  editForm!: FormGroup 
  notes: any =  []
  noteDetails: any

  noteObj: Notes = {
    id: '',
    note_title: '',
    note_description: ''
  }

  constructor(private notes_service: NotesService, private formBuilder: FormBuilder) { 
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    this.editForm = this.formBuilder.group({
      edited_title: ['', Validators.required],
      edited_description: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getAllNotes()
    
  }

  addNote() {
    const  { value } = this.notesForm
    console.log(value); 

    this.noteObj.id = '',
    this.noteObj.note_title = value.title,
    this.noteObj.note_description = value.description


    this.notes_service.addNote(this.noteObj).then((note) => {
      if(note) {
        alert('Note Added Seccessfully')
        this.notesForm.reset() 
      }
    }) 
  }



  getAllNotes() {
    this.notes_service.getNotes().subscribe((res: Notes[]) => {
      console.log(res)
      this.notes = res
    })
  }

  deleteNote(note: Notes) {
     let decision = confirm("Are you sure you want to delete this note? ")
     if(decision === true) {
      this.notes_service.deleteNote(note)
     }
  }
  getNoteDetails(note: Notes) {
    this.noteDetails = note
    console.log(this.noteDetails);
  }

  updateNote(note: Notes) {
    const { value } = this.editForm
    console.log(value);

    (this.noteObj.id = note.id),
    (this.noteObj.note_title = value.edited_title),
    (this.noteObj.note_description = value.edited_description);

    this.notes_service.updateNote(note, this.noteObj).then(() => {
       alert("Note Updated Successfully");
    })
    this.editForm.reset();
  }
}
