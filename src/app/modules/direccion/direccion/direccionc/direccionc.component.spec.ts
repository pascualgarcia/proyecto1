import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirecciocComponent } from './direccionc.component';

describe('DirecciocComponent', () => {
  let component: DirecciocComponent;
  let fixture: ComponentFixture<DirecciocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirecciocComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirecciocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
