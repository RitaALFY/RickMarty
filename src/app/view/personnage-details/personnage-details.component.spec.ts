import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnageDetailsComponent } from './personnage-details.component';

describe('PersonnageDetailsComponent', () => {
  let component: PersonnageDetailsComponent;
  let fixture: ComponentFixture<PersonnageDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnageDetailsComponent]
    });
    fixture = TestBed.createComponent(PersonnageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
