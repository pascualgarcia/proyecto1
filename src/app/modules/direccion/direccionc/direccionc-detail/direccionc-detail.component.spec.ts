import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccioncDetailComponent } from './direccionc-detail.component';

describe('DireccioncDetailComponent', () => {
  let component: DireccioncDetailComponent;
  let fixture: ComponentFixture<DireccioncDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccioncDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DireccioncDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
