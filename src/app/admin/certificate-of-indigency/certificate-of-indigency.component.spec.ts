import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfIndigencyComponent } from './certificate-of-indigency.component';

describe('CertificateOfIndigencyComponent', () => {
  let component: CertificateOfIndigencyComponent;
  let fixture: ComponentFixture<CertificateOfIndigencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificateOfIndigencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificateOfIndigencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
