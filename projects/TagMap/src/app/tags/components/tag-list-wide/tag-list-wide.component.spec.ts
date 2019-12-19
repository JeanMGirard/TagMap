import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagListWideComponent } from './tag-list-wide.component';

describe('TagListWideComponent', () => {
  let component: TagListWideComponent;
  let fixture: ComponentFixture<TagListWideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagListWideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagListWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
