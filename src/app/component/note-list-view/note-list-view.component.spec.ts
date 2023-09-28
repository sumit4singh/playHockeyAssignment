import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NoteBuilder } from 'src/app/model-builder/note-model-Builder';
import { Note } from 'src/app/model/note';
import { NoteDataSharingService } from 'src/app/services/note-data-sharing/note-data-sharing.service';

import { NoteListViewComponent } from './note-list-view.component';

fdescribe('NoteListViewComponent', () => {
  let component: NoteListViewComponent;
  let fixture: ComponentFixture<NoteListViewComponent>;

  beforeEach(() => {
    const noteDataSharingmock = jasmine.createSpyObj<any>("NoteDataSharingService", ['setData']);

    const Routermock = jasmine.createSpyObj<any>("Router", ['navigate']);
    TestBed.configureTestingModule({
      providers:[
        {provide: NoteDataSharingService, useValue: noteDataSharingmock},
        { provide: Router, useValue:Routermock}
      ],
      declarations: [NoteListViewComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(NoteListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('on note click', () => {
    beforeEach(() => {
      component.notes.push(new NoteBuilder()
      .withTitle("title")
      .withContent("content")
      .withEmail("sumit.ipm03@gmailo.com")
      .withLabel('personal')
      .withName('test Name')
      .build())
      component.onNoteClick('title')
    })
    it('', () => {
      expect(component.selectedNote.title).toEqual('title')
    })
  })
});
