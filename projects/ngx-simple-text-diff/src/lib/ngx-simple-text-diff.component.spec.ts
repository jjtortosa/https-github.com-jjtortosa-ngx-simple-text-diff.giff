import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgxSimpleTextDiffComponent } from './ngx-simple-text-diff.component';

describe('NgxSimpleTextDiffComponent', () => {
  let component: NgxSimpleTextDiffComponent;
  let fixture: ComponentFixture<NgxSimpleTextDiffComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSimpleTextDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSimpleTextDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
