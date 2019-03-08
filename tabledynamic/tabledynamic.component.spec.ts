import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledynamicComponent } from './tabledynamic.component';

describe('TabledynamicComponent', () => {
  let component: TabledynamicComponent;
  let fixture: ComponentFixture<TabledynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabledynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabledynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
