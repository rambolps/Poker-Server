import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitroomComponent } from './waitroom.component';

describe('WaitroomComponent', () => {
  let component: WaitroomComponent;
  let fixture: ComponentFixture<WaitroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
