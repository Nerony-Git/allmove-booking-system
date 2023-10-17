import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbProfileComponent } from './breadcrumb-profile.component';

describe('BreadcrumbProfileComponent', () => {
  let component: BreadcrumbProfileComponent;
  let fixture: ComponentFixture<BreadcrumbProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcrumbProfileComponent]
    });
    fixture = TestBed.createComponent(BreadcrumbProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
