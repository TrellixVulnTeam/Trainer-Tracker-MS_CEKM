import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllviewComponent } from './allview.component';

describe('AllviewComponent', () => {
  let component: AllviewComponent;
  let fixture: ComponentFixture<AllviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
