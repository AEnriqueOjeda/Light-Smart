import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejemplo2Page } from './ejemplo2.page';

describe('Ejemplo2Page', () => {
  let component: Ejemplo2Page;
  let fixture: ComponentFixture<Ejemplo2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
