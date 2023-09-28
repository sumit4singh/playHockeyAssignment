import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from 'src/app/model/note';
import { LocalDataAccessService } from 'src/app/services/local-data-access/local-data-access.service';
import { NoteDataSharingService } from 'src/app/services/note-data-sharing/note-data-sharing.service';

@Component({
  selector: 'app-note-list-view',
  templateUrl: './note-list-view.component.html',
  styleUrls: ['./note-list-view.component.scss']
})
export class NoteListViewComponent implements OnInit{

  constructor(private noteDataSharing: NoteDataSharingService, 
    private router: Router,
    private localDataAccessService: LocalDataAccessService)
    {}
  
  @Input() 
    notes: Note[] = [];
  @Output()
    deleteNoteEvent = new EventEmitter();
  selectedLabel: string = 'all';
  selectedNote = new Note();
  ngOnInit() { 
    if (this.notes.length == 0) {
      this.getDataFromLocalStorage();
    }
  }

  getDataFromLocalStorage() {
      this.notes = this.localDataAccessService.getFromLocalStorage();
  }

  get filteredNotes(): Note[] {
    if (this.selectedLabel === 'all') {
      return this.notes;
    } else {
      return this.notes.filter(note => note.label === this.selectedLabel);
    }
  }
  onDelete(note: Note) {
    this.deleteNoteEvent.emit(note);
  }

  onNoteClick(title: String) {
    this.selectedNote = this.notes.filter(note => note.title === title)[0];
    this.noteDataSharing.setData(this.selectedNote)
    this.router.navigate(['note/details', title]) ;
  }
}
