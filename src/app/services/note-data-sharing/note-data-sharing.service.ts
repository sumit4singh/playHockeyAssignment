import { Injectable } from '@angular/core';
import { Note } from 'src/app/model/note';

@Injectable({
  providedIn: 'root'
})
export class NoteDataSharingService {

  sharedData: Note = new Note(); 

  setData(data: Note) {
    this.sharedData = data;
  }

  getData(): Note {
    return this.sharedData;
  }

}

