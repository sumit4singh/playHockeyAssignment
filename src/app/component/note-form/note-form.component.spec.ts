import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteFormComponent } from './note-form.component';

fdescribe('NoteFormComponent', () => {
  let component: NoteFormComponent;
  let fixture: ComponentFixture<NoteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteFormComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(NoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("setting Correct Data", () =>{
    beforeEach(()=> {
      component.ngOnInit();
      component.noteForm.get('title')?.setValue('Test Title')
      component.noteForm.get('name')?.setValue('Test Name')
      component.noteForm.get('email')?.setValue('Testeamil@gmail.com')
      component.noteForm.get('label')?.setValue('personal')
      component.noteForm.get('content')?.setValue('Test content')
    });
    it('form should be valid', () => {
      expect(component.noteForm.valid).toBeTruthy();
    });
    it('button should be enabled', () => {
      expect(component.disableButton).toBeFalsy();
    });
    describe("on clicking the submit button",() => {
      beforeEach(() => {
        component.onSubmit();
      });
      it('noteObj should match with intially assigned value', () => {
        expect(component.noteObj.title).toEqual('Test Title')
      });
      it('form should be reset', () => {
        expect(component.noteForm.get('title')?.value).toBeNull();
      })
    })
  })
});
