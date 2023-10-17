import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountInformationComponent } from './profile-account-information.component';

describe('ProfileAccountInformationComponent', () => {
  let component: ProfileAccountInformationComponent;
  let fixture: ComponentFixture<ProfileAccountInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAccountInformationComponent]
    });
    fixture = TestBed.createComponent(ProfileAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
