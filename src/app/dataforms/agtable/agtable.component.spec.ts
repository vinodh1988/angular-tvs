import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgtableComponent } from './agtable.component';

describe('AgtableComponent', () => {
  let component: AgtableComponent;
  let fixture: ComponentFixture<AgtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
