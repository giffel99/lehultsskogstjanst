import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidigareProjektComponent } from './tidigare-projekt.component';

describe('TidigareProjektComponent', () => {
  let component: TidigareProjektComponent;
  let fixture: ComponentFixture<TidigareProjektComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TidigareProjektComponent]
    });
    fixture = TestBed.createComponent(TidigareProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
