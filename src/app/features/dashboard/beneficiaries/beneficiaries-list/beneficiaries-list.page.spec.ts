import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeneficiariesListPage } from './beneficiaries-list.page';

describe('BeneficiariesListPage', () => {
  let component: BeneficiariesListPage;
  let fixture: ComponentFixture<BeneficiariesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiariesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
