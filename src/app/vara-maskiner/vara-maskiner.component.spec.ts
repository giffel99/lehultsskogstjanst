import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaraMaskinerComponent } from './vara-maskiner.component';

describe('VaraMaskinerComponent', () => {
  let component: VaraMaskinerComponent;
  let fixture: ComponentFixture<VaraMaskinerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaraMaskinerComponent]
    });
    fixture = TestBed.createComponent(VaraMaskinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
