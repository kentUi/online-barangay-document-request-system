import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneClearanceComponent } from './zone-clearance.component';

describe('ZoneClearanceComponent', () => {
  let component: ZoneClearanceComponent;
  let fixture: ComponentFixture<ZoneClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneClearanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
