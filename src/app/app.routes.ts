import { Routes } from '@angular/router';
import { LoginPage } from './features/auth/login/login.page';
import { SignupPage } from './features/auth/signup/signup.page';
import { BeneficiariesPage } from './features/dashboard/beneficiaries/beneficiaries-list/beneficiaries-list.page';
import { BankTransfersPage } from './features/dashboard/bank-transfers/bank-transfers-list.page';
import { AccueilPage } from './features/dashboard/accueil/accueil.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'dashboard/accueil',
    component: AccueilPage
  },
  {
    path: 'dashboard/beneficiaries/beneficiaries-list',
    component: BeneficiariesPage
  },
  {
    path: 'dashboard/bank-transfers/bank-transfers/list',
    component: BankTransfersPage
  }

];