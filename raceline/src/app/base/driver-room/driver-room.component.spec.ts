import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverRoomComponent } from './driver-room.component';

describe('DriverRoomComponent', () => {
  let component: DriverRoomComponent;
  let fixture: ComponentFixture<DriverRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
