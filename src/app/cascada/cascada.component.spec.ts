import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadaComponent } from './cascada.component';

describe('CascadaComponent', () => {
  let component: CascadaComponent;
  let fixture: ComponentFixture<CascadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
