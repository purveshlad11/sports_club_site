import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullAboutComponent } from './full-about.component';

describe('FullAboutComponent', () => {
  let component: FullAboutComponent;
  let fixture: ComponentFixture<FullAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullAboutComponent]
    });
    fixture = TestBed.createComponent(FullAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
