import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBrgyCertComponent } from './print-brgy-cert.component';

describe('PrintBrgyCertComponent', () => {
  let component: PrintBrgyCertComponent;
  let fixture: ComponentFixture<PrintBrgyCertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintBrgyCertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintBrgyCertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
