import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicRoomComponent } from './mechanic-room.component';

describe('MechanicRoomComponent', () => {
  let component: MechanicRoomComponent;
  let fixture: ComponentFixture<MechanicRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MechanicRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
