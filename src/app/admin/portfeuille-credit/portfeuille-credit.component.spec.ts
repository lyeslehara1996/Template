import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfeuilleCreditComponent } from './portfeuille-credit.component';

describe('PortfeuilleCreditComponent', () => {
  let component: PortfeuilleCreditComponent;
  let fixture: ComponentFixture<PortfeuilleCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfeuilleCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfeuilleCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
