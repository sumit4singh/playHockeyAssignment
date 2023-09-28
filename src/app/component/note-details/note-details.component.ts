import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/model/note';
import { NoteDataSharingService } from 'src/app/services/note-data-sharing/note-data-sharing.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})

export class NoteDetailsComponent implements OnInit {
  note: Note = new Note();
  title: any;

  constructor(private route: ActivatedRoute, private noteDataSharingService: NoteDataSharingService) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title');
    if(this.title) {
      this.note = this.noteDataSharingService.getData();
    }
  }
}

