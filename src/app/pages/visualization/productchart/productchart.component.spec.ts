import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductchartComponent } from './productchart.component';

describe('ProductchartComponent', () => {
  let component: ProductchartComponent;
  let fixture: ComponentFixture<ProductchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
