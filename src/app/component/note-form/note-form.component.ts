import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Note } from 'src/app/model/note';
import { LocalDataAccessService } from 'src/app/services/local-data-access/local-data-access.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  noteForm!: FormGroup;
  private showSucessMessage = false;
  public noteObj: Note = new Note();
  public notes: Note[] = [];

  constructor(private formBuilder: FormBuilder,
    private localDataAccessService: LocalDataAccessService) {}

  ngOnInit() {
    this.buildForm();
    this.getDataFromLocalStorage();
  }

  buildForm() {
    this.noteForm = this.formBuilder.group({
      title: [ this.noteObj.title , Validators.required],
      name: [ this.noteObj.name , Validators.required],
      label: [ this.noteObj.label , Validators.required],
      email: [ this.noteObj.email , [Validators.required, Validators.email]],
      content: [ this.noteObj.content , Validators.required]
    });
  }

  getDataFromLocalStorage(){
    this.notes = this.localDataAccessService.getFromLocalStorage();
  }

  onSubmit() {
    if (this.noteForm.valid) {
      this.noteObj = this.noteForm.value
      console.log('Note submitted:', this.noteObj);
      console.log('asdf', this.noteForm.value)
      this.notes.push(this.noteObj);
      this.showSucessMessage = true;
      this.clearFormData();
      this.localDataAccessService.setToLocalStorage(this.notes)
    }
  }

  private clearFormData(){
    this.noteForm.reset();
  }

  public get disableButton(): boolean {
    return !this.noteForm.valid;
  }

  public get getShowSucessMessage(): boolean {
    return this.showSucessMessage;
  }

  public get showListOfNotes(): boolean {
    return this.notes.length >= 1
  }

  public deleteFromNote(noteToDelete: Note) {
    this.notes = this.notes.filter((note) => {
      return note.title !== noteToDelete.title
    })
    this.localDataAccessService.setToLocalStorage(this.notes)
  }
}
