import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPdpCustomComponent } from './my-pdp-custom.component';

describe('MyPdpCustomComponent', () => {
  let component: MyPdpCustomComponent;
  let fixture: ComponentFixture<MyPdpCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyPdpCustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPdpCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
