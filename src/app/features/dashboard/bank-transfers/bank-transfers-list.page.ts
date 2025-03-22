import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import the IonicModule instead of individual components
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-bank-transfers',
  templateUrl: './bank-transfers-list.page.html',
  styleUrls: ['./bank-transfers-list.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    DatePipe,
    CurrencyPipe,
    NgFor,
    LayoutComponent
  ],
})
export class BankTransfersPage {
  transfers = [
    {
      senderName: 'John Doe',
      receiverName: 'Jane Smith',
      amount: 1500.00,
      date: new Date('2025-03-15T10:30:00'),
    },
    {
      senderName: 'Alice Johnson',
      receiverName: 'Bob Brown',
      amount: 3000.00,
      date: new Date('2025-03-16T14:45:00'),
    },
    // Add more transfers as needed
  ];

  constructor() {}

  viewTransfer(transfer: any) {
    console.log('Viewing transfer details:', transfer);
    // Navigate to the detailed view of the selected transfer, if needed
  }
  
}
