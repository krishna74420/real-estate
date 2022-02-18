import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {DashboardService} from '../../dashboard.service';
import {RealEstateInterface} from '../../dashboard.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {

  subscription: any;
  realEstateDetails: RealEstateInterface[] = [];
  noDataFound = false;
  constructor(public platform: Platform,
              private dashboardService: DashboardService) {
    this.getAllRealEstate();
  }

  getAllRealEstate(){
    this.dashboardService.getRealEstate().subscribe( res => {
      this.realEstateDetails = res;
    });
  }

}
