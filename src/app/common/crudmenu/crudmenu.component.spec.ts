import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudmenuComponent } from './crudmenu.component';

describe('CrudmenuComponent', () => {
  let component: CrudmenuComponent;
  let fixture: ComponentFixture<CrudmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
