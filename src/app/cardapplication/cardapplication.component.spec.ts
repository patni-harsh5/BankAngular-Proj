import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapplicationComponent } from './cardapplication.component';

describe('CardapplicationComponent', () => {
  let component: CardapplicationComponent;
  let fixture: ComponentFixture<CardapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
