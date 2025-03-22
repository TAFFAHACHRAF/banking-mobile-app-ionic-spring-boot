import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import the IonicModule instead of individual components
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './layout.component.html',
  imports: [
    IonicModule,
    RouterModule,
    FormsModule,
    CommonModule,
    LayoutComponent
  ],
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private routeSub: any;

  constructor(private router: Router, private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    // Listen for route changes and update the title
    this.routeSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const title = this.getRouteTitle(this.route.snapshot);
      this.titleService.setTitle(title);
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  private getRouteTitle(routeSnapshot: any): string {
    // Check if the route has a custom title set in the data
    const title = routeSnapshot.data['title'] || 'Default Title';
    return title;
  }

  goToAccueil() {
    this.router.navigate(['dashboard/accueil']);
  }

  goToBeneficiariesList() {
    this.router.navigate(['dashboard/beneficiaries/beneficiaries-list']);
  }

  goToTransfersHistory() {
    this.router.navigate(['dashboard/bank-transfers/bank-transfers/list']);
  }
}