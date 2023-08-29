import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnagesListComponent } from './personnages-list.component';

describe('PersonnagesListComponent', () => {
  let component: PersonnagesListComponent;
  let fixture: ComponentFixture<PersonnagesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnagesListComponent]
    });
    fixture = TestBed.createComponent(PersonnagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
