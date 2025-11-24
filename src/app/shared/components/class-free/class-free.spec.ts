import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassFree } from './class-free';

describe('ClassFree', () => {
  let component: ClassFree;
  let fixture: ComponentFixture<ClassFree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassFree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassFree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
