import { Injectable } from '@angular/core';
import { Note } from 'src/app/model/note';

@Injectable({
  providedIn: 'root'
})
export class LocalDataAccessService {

  private notes = []
  setToLocalStorage(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  getFromLocalStorage() : Note[] {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      this.notes = JSON.parse(savedNotes);
    }
    return this.notes
  }
}
