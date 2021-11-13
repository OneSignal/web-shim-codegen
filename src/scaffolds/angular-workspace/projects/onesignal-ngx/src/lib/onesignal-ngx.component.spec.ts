import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnesignalNgxComponent } from './onesignal-ngx.component';

describe('OnesignalNgxComponent', () => {
  let component: OnesignalNgxComponent;
  let fixture: ComponentFixture<OnesignalNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnesignalNgxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnesignalNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
