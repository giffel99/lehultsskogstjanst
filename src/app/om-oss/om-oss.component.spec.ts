import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmOssComponent } from './om-oss.component';

describe('OmOssComponent', () => {
  let component: OmOssComponent;
  let fixture: ComponentFixture<OmOssComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OmOssComponent]
    });
    fixture = TestBed.createComponent(OmOssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
