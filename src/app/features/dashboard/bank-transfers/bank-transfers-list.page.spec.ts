import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BankTransfersPage } from './bank-transfers-list.page';

describe('BankTransfersPage', () => {
  let component: BankTransfersPage;
  let fixture: ComponentFixture<BankTransfersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BankTransfersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
