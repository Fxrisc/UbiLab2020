import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformquesComponent } from './dynamicformques.component';

describe('DynamicformquesComponent', () => {
  let component: DynamicformquesComponent;
  let fixture: ComponentFixture<DynamicformquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
