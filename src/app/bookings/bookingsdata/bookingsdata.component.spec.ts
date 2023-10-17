import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsdataComponent } from './bookingsdata.component';

describe('BookingsdataComponent', () => {
  let component: BookingsdataComponent;
  let fixture: ComponentFixture<BookingsdataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsdataComponent]
    });
    fixture = TestBed.createComponent(BookingsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
