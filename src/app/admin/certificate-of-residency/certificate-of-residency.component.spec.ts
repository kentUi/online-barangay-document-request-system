import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfResidencyComponent } from './certificate-of-residency.component';

describe('CertificateOfResidencyComponent', () => {
  let component: CertificateOfResidencyComponent;
  let fixture: ComponentFixture<CertificateOfResidencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateOfResidencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateOfResidencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
