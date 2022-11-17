import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttailwindComponent } from './testtailwind.component';

describe('TesttailwindComponent', () => {
  let component: TesttailwindComponent;
  let fixture: ComponentFixture<TesttailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesttailwindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesttailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
