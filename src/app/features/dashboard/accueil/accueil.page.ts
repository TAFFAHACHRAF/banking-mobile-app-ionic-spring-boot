import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import the IonicModule instead of individual components
import { Router } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    FormsModule,
    CommonModule,
    LayoutComponent
  ]
})
export class AccueilPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize data if necessary
  }

  // Method to navigate to Beneficiaries List Page
  goToBeneficiariesList() {
    this.router.navigate(['/dashboard/beneficiaries/beneficiaries-list']); // Ensure the route matches your actual route
  }

  // Method to navigate to Bank Transfers History Page
  goToTransfersHistory() {
    this.router.navigate(['/dashboard/bank-transfers/bank-transfers/list']); // Ensure the route matches your actual route
  }
}