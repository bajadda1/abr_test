import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPdpCustomOutletComponent } from './my-pdp-custom-outlet.component';

describe('MyPdpCustomOutletComponent', () => {
  let component: MyPdpCustomOutletComponent;
  let fixture: ComponentFixture<MyPdpCustomOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPdpCustomOutletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPdpCustomOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
