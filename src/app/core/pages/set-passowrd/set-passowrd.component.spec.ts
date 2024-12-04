import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPassowrdComponent } from './set-passowrd.component';

describe('SetPassowrdComponent', () => {
  let component: SetPassowrdComponent;
  let fixture: ComponentFixture<SetPassowrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetPassowrdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetPassowrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
