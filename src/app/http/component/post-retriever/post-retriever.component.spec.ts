import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHandlerService } from '../../services/http-handler.service';

import { PostRetrieverComponent } from './post-retriever.component';

fdescribe('PostRetrieverComponent', () => {
  let component: PostRetrieverComponent;
  let fixture: ComponentFixture<PostRetrieverComponent>;
  let httpHandlerServiceMock = jasmine.createSpyObj<any>("HttpHandlerService", ['get']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {provide: HttpHandlerService, useValue: httpHandlerServiceMock}
      ],
      declarations: [PostRetrieverComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(PostRetrieverComponent);
    component = fixture.componentInstance;
    httpHandlerServiceMock.get.and.returnValue(of({
      data: {
        children: [
          { data: { title: 'Post 1' } },
          { data: { title: 'Post 2' } }
        ]
      }
    }));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("for mock data ", () => {
    beforeEach(() => {
      component.contentType = 'angular'
      component.makeGetCall();
    });
    it("val", () => {
      expect(component.redditPosts.length).toEqual(2);
    })
  })
});