import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrinksPage } from './drinks.page';

describe('DrinksPage', () => {
  let component: DrinksPage;
  let fixture: ComponentFixture<DrinksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
