import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInformationEdirComponent } from './profile-information-edir.component';

describe('ProfileInformationEdirComponent', () => {
  let component: ProfileInformationEdirComponent;
  let fixture: ComponentFixture<ProfileInformationEdirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInformationEdirComponent]
    });
    fixture = TestBed.createComponent(ProfileInformationEdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
