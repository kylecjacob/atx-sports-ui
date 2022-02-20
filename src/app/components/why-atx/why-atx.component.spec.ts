import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAtxComponent } from './why-atx.component';

describe('WhyAtxComponent', () => {
  let component: WhyAtxComponent;
  let fixture: ComponentFixture<WhyAtxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyAtxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyAtxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
