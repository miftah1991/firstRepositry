import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperyCardComponent } from './propery-card.component';

describe('ProperyCardComponent', () => {
  let component: ProperyCardComponent;
  let fixture: ComponentFixture<ProperyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
