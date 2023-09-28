import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEnvFromDocusignComponent } from './post-env-from-docusign.component';

describe('PostEnvFromDocusignComponent', () => {
  let component: PostEnvFromDocusignComponent;
  let fixture: ComponentFixture<PostEnvFromDocusignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostEnvFromDocusignComponent]
    });
    fixture = TestBed.createComponent(PostEnvFromDocusignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
