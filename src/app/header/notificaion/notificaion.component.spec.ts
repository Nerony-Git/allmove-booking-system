import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaionComponent } from './notificaion.component';

describe('NotificaionComponent', () => {
  let component: NotificaionComponent;
  let fixture: ComponentFixture<NotificaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificaionComponent]
    });
    fixture = TestBed.createComponent(NotificaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
