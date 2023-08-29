import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCharacterComponent } from './edit-character.component';

describe('EditCharacterComponent', () => {
  let component: EditCharacterComponent;
  let fixture: ComponentFixture<EditCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCharacterComponent]
    });
    fixture = TestBed.createComponent(EditCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
