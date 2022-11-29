import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationRoleComponent } from './navigation-role.component';

describe('NavigationRoleComponent', () => {
  let component: NavigationRoleComponent;
  let fixture: ComponentFixture<NavigationRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
