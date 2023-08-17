import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsRegComponent } from './sports-reg.component';

describe('SportsRegComponent', () => {
  let component: SportsRegComponent;
  let fixture: ComponentFixture<SportsRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportsRegComponent]
    });
    fixture = TestBed.createComponent(SportsRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
