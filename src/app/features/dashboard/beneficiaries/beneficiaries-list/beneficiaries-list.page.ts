import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import the IonicModule instead of individual components
import { LayoutComponent } from '../../layout/layout.component';

@Component({
  selector: 'app-beneficiaries-list',
  templateUrl: './beneficiaries-list.page.html',
  styleUrls: ['./beneficiaries-list.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    NgFor,
    LayoutComponent
  ],
})
export class BeneficiariesPage {
  beneficiaries = [
    { 
      fullName: 'John Doe', 
      address: '1234 Elm Street', 
      phone: '+123456789', 
      email: 'johndoe@example.com' 
    },
    { 
      fullName: 'Jane Smith', 
      address: '5678 Oak Avenue', 
      phone: '+987654321', 
      email: 'janesmith@example.com' 
    },
    // Add more beneficiaries as needed
  ];

  constructor() {}

  viewBeneficiary(beneficiary: any) {
    console.log('Viewing details for:', beneficiary);
    // Navigate to the detailed view of the selected beneficiary, if needed
  }
}
